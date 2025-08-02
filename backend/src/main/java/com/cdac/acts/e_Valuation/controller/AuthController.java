package com.cdac.acts.e_Valuation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.acts.e_Valuation.dto.LoginRequest;
import com.cdac.acts.e_Valuation.dto.LoginResponse;
import com.cdac.acts.e_Valuation.dto.RegisterRequest;
import com.cdac.acts.e_Valuation.dto.UserDTO;
import com.cdac.acts.e_Valuation.entity.User;
import com.cdac.acts.e_Valuation.service.AuthService;
import com.cdac.acts.e_Valuation.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	private AuthService authService;

	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public ResponseEntity<String> register(@Valid @RequestBody RegisterRequest request) {
		System.out.printf("Role received: {}", request.getRole() != null ? request.getRole() : "null");
		
		boolean success = authService.register(request.getName(), request.getEmail(), request.getPassword(),
				request.getRole());

		if (!success)
			return ResponseEntity.status(HttpStatus.CONFLICT).body("User with this email already exists!");

		return ResponseEntity.status(201).body("User registered successfully!");
	}

	@PostMapping("/login")
	public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
		String jwt = authService.login(request.getEmail(), request.getPassword());

		User usr = userService.getUserByEmail(request.getEmail());
		UserDTO usrResponse = new UserDTO(usr.getId(), usr.getName(), usr.getEmail(), usr.getRole());

		return ResponseEntity.ok(new LoginResponse(jwt, usrResponse));
	}
}
