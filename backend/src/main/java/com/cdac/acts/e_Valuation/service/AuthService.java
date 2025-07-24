package com.cdac.acts.e_Valuation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cdac.acts.e_Valuation.entity.User;
import com.cdac.acts.e_Valuation.enums.Role;
import com.cdac.acts.e_Valuation.repository.UserRepository;
import com.cdac.acts.e_Valuation.security.TokenProvider;

@Service
public class AuthService {

    @Autowired private UserRepository userRepository;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private TokenProvider tokenProvider;

    public void register(String name, String email, String password) {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPasswordHash(passwordEncoder.encode(password));
        user.setRole(Role.CANDIDATE);
        System.out.println(user.getName());
        System.out.println(user.getEmail());
        System.out.println(user.getPassword());
        userRepository.save(user);
    }

    public String login(String email, String password) {
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException("User not found!"));

        if (!passwordEncoder.matches(password, user.getPasswordHash())) {
            throw new BadCredentialsException("Invalid credentials!");
        }

        return tokenProvider.generateToken(
            new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPasswordHash(),
                List.of(new SimpleGrantedAuthority(user.getRole().name()))
//                List.of()
            )
        );
    }
}
