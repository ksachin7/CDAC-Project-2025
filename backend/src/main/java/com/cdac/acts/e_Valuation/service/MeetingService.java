package com.cdac.acts.e_Valuation.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.acts.e_Valuation.dto.MeetingCreate;
import com.cdac.acts.e_Valuation.entity.HistoryMeeting;
import com.cdac.acts.e_Valuation.entity.Meeting;
import com.cdac.acts.e_Valuation.entity.ScheduleMeeting;
import com.cdac.acts.e_Valuation.repository.MeetingRepository;

@Service
public class MeetingService {
	
	@Autowired
	private MeetingRepository meetingRepo;
	
	@Autowired
	 private ScheduleMeetingServiceImp SmService;
	
	@Autowired
	private HistoryMeetingServiceImp HmService;
	
	@Autowired
	private EmailService emailService;
	
	public Long create(Long cid, Long iid, String porpose, LocalDate date) {
		Meeting meet = new Meeting();
		meet.setCandidateid(cid);
		meet.setInterviewerid(iid);
		meet.setPurpose(porpose);
		meetingRepo.save(meet);
		ScheduleMeeting sm = new ScheduleMeeting();
		sm.setMeetingid(meet.getMeetingid());
		sm.setDate(date);
		SmService.save(sm);
		//emailService.sendSimpleEmail("19dcs009@lnmiit.ac.in", "Testing", "hello");
		return meet.getMeetingid();
	}

	public void MeetingHappen(Long meetingId) {
		ScheduleMeeting sm = SmService.getByMeetingId(meetingId);
		Meeting meet = meetingRepo.getById(meetingId);
		HistoryMeeting hm = new HistoryMeeting();
		hm.setDate(sm.getDate());
		hm.setHappen(true);
		hm.setMeetingid(meetingId);
		HmService.save(hm);
		SmService.remove(sm);
	}
	
	public List<MeetingCreate> getMeetingsByUserId(Long userId) {
	    List<Meeting> resList= meetingRepo.findByCandidateidOrInterviewerid(userId, userId);
	    List<MeetingCreate> dtoList = new ArrayList<MeetingCreate>();
	    
	    for(Meeting item :resList) {
	    	MeetingCreate dto = new MeetingCreate();
	    	dto.setCandidateid(item.getCandidateid());
	    	dto.setInterviewerid(item.getInterviewerid());
	    	dto.setMeetingid(item.getMeetingid());
	    	dto.setPurpose(item.getPurpose());
	    	
	    	dtoList.add(dto);
	    	
	    }
	    
	    return dtoList;
	}
	
	

}
