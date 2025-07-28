package com.cdac.acts.e_Valuation.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.cdac.acts.e_Valuation.entity.Meeting;
import com.cdac.acts.e_Valuation.repository.MeetingRepository;

public class MeetingService {
	
	@Autowired
	private MeetingRepository meetingRepo;
	
	public void create(Long cid, Long iid) {
		Meeting meet = new Meeting();
		meet.setCandidateid(cid);
		meet.setInterviewerid(iid);
		meetingRepo.save(meet);
	}

}
