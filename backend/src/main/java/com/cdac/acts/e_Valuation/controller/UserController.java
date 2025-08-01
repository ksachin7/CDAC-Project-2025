package com.cdac.acts.e_Valuation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.acts.e_Valuation.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;

	@PutMapping("/users/{id}/role")
	public ResponseEntity<?> updateUserRole(@PathVariable Long id, @RequestBody String newRole){
		
		userService.updateUserRole(id, newRole.replace("\"", ""));	// replace("\"", "") : turning "\"user\"" into "user" so that it can work without throwing IllegalArgumentException.
		return ResponseEntity.ok().build();
	}
}
