package com.cdac.acts.e_Valuation.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.acts.e_Valuation.entity.ScheduleMeeting;
import com.cdac.acts.e_Valuation.repository.ScheduleRepository;

@Service
public class ScheduleService {
	
	@Autowired
	private ScheduleRepository scheduleRepo;
	
	public void createScheduleMeeting(Long meetingid, LocalDate date, String purpose) {
		ScheduleMeeting sm = new ScheduleMeeting();
		sm.setMeetingid(meetingid);
		sm.setDate(date);
		sm.setPurpose(purpose);
		scheduleRepo.save(sm);
	}
}
