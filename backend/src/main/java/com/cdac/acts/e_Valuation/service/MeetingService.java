package com.cdac.acts.e_Valuation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.acts.e_Valuation.entity.Meeting;
import com.cdac.acts.e_Valuation.repository.MeetingRepository;

@Service
public class MeetingService {
	
	@Autowired
	private MeetingRepository meetingRepo;
	
	@Autowired
	private EmailService emailService;
	
	public void create(Long cid, Long iid, String porpose) {
		Meeting meet = new Meeting();
		meet.setCandidateid(cid);
		meet.setInterviewerid(iid);
		meet.setPurpose(porpose);
		meetingRepo.save(meet);
		emailService.sendSimpleEmail("19dcs009@lnmiit.ac.in", "Testing", "hello");
	}
	
	

}
