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

import com.cdac.acts.e_Valuation.dto.HistoryMeetingResponse;
import com.cdac.acts.e_Valuation.dto.MeetingCreate;
import com.cdac.acts.e_Valuation.dto.MeetingCreateResponse;
import com.cdac.acts.e_Valuation.dto.MeetingCreateWithDate;
import com.cdac.acts.e_Valuation.dto.MeetingFinishRequest;
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
	public ResponseEntity<List<MeetingCreateResponse>> getMeetingsForUser(@PathVariable Long userId) {
		
	 //   List<MeetingCreate> meetings = meetingService.getMeetingsByUserId(userId); // original
	    List<MeetingCreateResponse> meetingsList = meetingService.getMeetingListByUserId(userId); // provides meetingid, candidatename, candidateemail, interviewername, intervieweremail, porpuse
	    return ResponseEntity.ok(meetingsList);
	}
	
	@PostMapping("/create")
    public ResponseEntity<String> createMeeting(@Valid @RequestBody MeetingCreateWithDate request) {
		
		 LocalDate date = (request.getDate() != null) ? request.getDate() : LocalDate.now().plusDays(1);
		    
        Long meetingId = meetingService.create(request.getCandidateid(), request.getInterviewerid(), request.getPurpose(),date);

        MeetingCreate notification = new MeetingCreate();
        notification.setMeetingid(meetingId);
        notification.setCandidateid(request.getCandidateid());
        notification.setInterviewerid(request.getInterviewerid());
        notification.setPurpose(request.getPurpose());
        
        MeetingCreateResponse completeNotification = meetingService.getCompleteNotification(notification,date);
        
        

        // Send to both candidate and interviewer
        messagingTemplate.convertAndSend("/queue/user/" + request.getCandidateid(), completeNotification);
        messagingTemplate.convertAndSend("/queue/user/" + request.getInterviewerid(), completeNotification);

        return ResponseEntity.status(201).body("Meeting Created and notification sent!");
    }
	
	@PostMapping("/finish")
	public ResponseEntity<String> meetingFinish(@Valid @RequestBody MeetingFinishRequest request)
	{
		
		
		meetingService.MeetingHappen(request.getMeetingid(), request.getRating(), request.getReview());
		return ResponseEntity.status(201).body("Meeting Has Finished");
	}
	
	@GetMapping("/history/{userId}")
	public ResponseEntity<List<HistoryMeetingResponse>> getMeetingHistoryForUser(@PathVariable Long userId) {
		
	    List<HistoryMeetingResponse> meetingsHistoryList = meetingService.getListOfHistoryMeetingByUserId(userId); 
	    return ResponseEntity.ok(meetingsHistoryList);
	}

}
