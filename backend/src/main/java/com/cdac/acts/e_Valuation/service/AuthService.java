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

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class AuthService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private TokenProvider tokenProvider;

	public boolean register(String name, String email, String password, Role role) {
		if (userRepository.existsByEmail(email)) {
			log.error("User with email {} alredy exists!", email);
			return false;
		}

		User user = new User();

		user.setName(name);
		user.setEmail(email);
		user.setPasswordHash(passwordEncoder.encode(password));
		user.setRole(role == null ? Role.CANDIDATE : role);

		log.debug("Saving user to database: {}", user);

		userRepository.save(user);
		return true;
	}

	public String login(String email, String password) {
		User user = userRepository.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("User not found!"));

		if (!passwordEncoder.matches(password, user.getPasswordHash())) {
			throw new BadCredentialsException("Invalid credentials!");
		}

		return tokenProvider.generateToken(new org.springframework.security.core.userdetails.User(user.getEmail(),
				user.getPasswordHash(), List.of(new SimpleGrantedAuthority(user.getRole().name()))
		// List.of()
		));
	}
}
