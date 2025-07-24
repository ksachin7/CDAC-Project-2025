package com.cdac.acts.e_Valuation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.acts.e_Valuation.dto.LoginRequest;
import com.cdac.acts.e_Valuation.dto.LoginResponse;
import com.cdac.acts.e_Valuation.dto.RegisterRequest;
import com.cdac.acts.e_Valuation.service.AuthService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody RegisterRequest request) {
        authService.register(request.getName(),request.getEmail(), request.getPassword());
        return ResponseEntity.status(201).body("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        String jwt = authService.login(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(new LoginResponse(jwt));
    }
    
    // to test token is working correctly
    @GetMapping("/me")
    public ResponseEntity<UserDetails> getCurrentUser(Authentication authentication) {
        return ResponseEntity.ok((UserDetails) authentication.getPrincipal());
    }
    
//     
//    public Meeting schedule(String creatorEmail, MeetingRequest req) {
//        User creator = userRepo.findByEmail(creatorEmail).orElseThrow();
//
//        Meeting meet = new Meeting();
//        meet.setInterviewer(creator);              // implicitly becomes interviewer
//        meet.setParticipants(req.getParticipantIds().stream()
//             .map(id -> userRepo.findById(id).orElseThrow())
//             .collect(Collectors.toList()));
//        // set time, description, etc.
//        return meetingRepo.save(meet);
//    }

}
