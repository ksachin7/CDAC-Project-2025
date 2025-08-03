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
	
	@Autowired
	private UserService userService;
	
	@Autowired 
	private EmailService emailService;

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
		
		try {
			sendEmailForRegistration(user.getId());
		}catch (Exception e) {
			// TODO: handle exception
		}
		
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
	
	public void sendEmailForRegistration(Long id) {
		User user = userService.getUserById(id).get();
		String to = user.getEmail();
		String name = user.getName();
		String role = user.getRole().toString();
		String text = "Hi "+name+",\r\n"
				+ "\r\n"
				+ "Welcome "+role+" to E-Valuation! We're thrilled to have you join our community.\r\n"
				+ "\r\n"
				+ "Your account is now active and ready to go.\r\n"
				+ "\r\n"
				+ "If you have any questions, feel free to reply to this email.\r\n"
				+ "\r\n"
				+ "We look forward to seeing you around!\r\n"
				+ "\r\n"
				+ "Best regards,\r\n"
				+ "The Team at E-Valuation\r\n";
		emailService.registerEmail(to, text);
	}
}
