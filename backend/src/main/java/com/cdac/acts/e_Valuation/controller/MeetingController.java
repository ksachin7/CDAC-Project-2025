package com.cdac.acts.e_Valuation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.acts.e_Valuation.dto.MeetingCreate;
import com.cdac.acts.e_Valuation.service.MeetingService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/meeting")
public class MeetingController {
	
	@Autowired
	private MeetingService meetingService;
	
	@PostMapping("/create")
	public ResponseEntity<String> createMeeting(@Valid @RequestBody MeetingCreate request) {
        meetingService.create(request.getCandidateid(),request.getInterviewerid(), request.getPurpose());
        return ResponseEntity.status(201).body("Meeting Created registered successfully!");
    }
}
