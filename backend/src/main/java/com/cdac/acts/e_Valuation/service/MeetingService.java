package com.cdac.acts.e_Valuation.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.acts.e_Valuation.dto.MeetingCreate;
import com.cdac.acts.e_Valuation.entity.Meeting;
import com.cdac.acts.e_Valuation.repository.MeetingRepository;

@Service
public class MeetingService {
	
	@Autowired
	private MeetingRepository meetingRepo;
	
	@Autowired
	private EmailService emailService;
	
	public Long create(Long cid, Long iid, String porpose) {
		Meeting meet = new Meeting();
		meet.setCandidateid(cid);
		meet.setInterviewerid(iid);
		meet.setPurpose(porpose);
		meetingRepo.save(meet);
		//emailService.sendSimpleEmail("19dcs009@lnmiit.ac.in", "Testing", "hello");
		return meet.getMeetingid();
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
