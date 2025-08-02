package com.cdac.acts.e_Valuation.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.quartz.LocalDataSourceJobStore;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@Autowired
    private SimpMessagingTemplate messagingTemplate;
	
	@GetMapping("/user/{userId}")
	public ResponseEntity<List<MeetingCreate>> getMeetingsForUser(@PathVariable Long userId) {
	    List<MeetingCreate> meetings = meetingService.getMeetingsByUserId(userId);
	    return ResponseEntity.ok(meetings);
	}
	
	@PostMapping("/create")
    public ResponseEntity<String> createMeeting(@Valid @RequestBody MeetingCreate request) {
        Long meetingId = meetingService.create(request.getCandidateid(), request.getInterviewerid(), request.getPurpose(), LocalDate.now().plusDays(1));

        MeetingCreate notification = new MeetingCreate();
        notification.setMeetingid(meetingId);
        notification.setCandidateid(request.getCandidateid());
        notification.setInterviewerid(request.getInterviewerid());
        notification.setPurpose(request.getPurpose());

        // Send to both candidate and interviewer
        messagingTemplate.convertAndSend("/queue/user/" + request.getCandidateid(), notification);
        messagingTemplate.convertAndSend("/queue/user/" + request.getInterviewerid(), notification);

        return ResponseEntity.status(201).body("Meeting Created and notification sent!");
    }

}
