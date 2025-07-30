package com.cdac.acts.e_Valuation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.acts.e_Valuation.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userService;
	
	@GetMapping("/getId")
	public ResponseEntity<Long> getId(@Valid @RequestBody String email){
		System.out.println("__________________________________khkhkk_________________________________________________");
		Long id = userService.getValidId(email);
		if(id==(long)-1) {
			return ResponseEntity.status(201).body((long)-1);
		}
		else {
			return ResponseEntity.status(201).body(id);
		}
	}
	@GetMapping("/getEmail")
	public ResponseEntity<String> getEmail(@Valid @RequestBody Long id){
		System.out.println("___________________________________________________________________________________");
		String email = userService.getValidEmail(id);
		if(email==null) {
			return ResponseEntity.status(201).body("Not_Found");
		}
		else {
			return ResponseEntity.status(201).body(email);
		}
	}
}
