package com.cdac.acts.e_Valuation.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class TestController {

	@GetMapping("/message")
	public Map<String, String> getMessage() {
		return Map.of("message", "Hello from Spring Boot!");
	}

	@GetMapping("/test")
	public ResponseEntity<String> testSecurity() {
		return ResponseEntity.ok("✅ Accessed without authentication");
	}

	// to test token is working correctly
	@GetMapping("/me")
	public ResponseEntity<UserDetails> getCurrentUser(Authentication authentication) {
		return ResponseEntity.ok((UserDetails) authentication.getPrincipal());
	}
}
