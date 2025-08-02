package com.cdac.acts.e_Valuation.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.acts.e_Valuation.entity.ScheduleMeeting;
import com.cdac.acts.e_Valuation.repository.ScheduleMeetingRepository;

@Service
public class ScheduleMeetingServiceImp implements ScheduleMeetingService {

	@Autowired
	ScheduleMeetingRepository SmRepo;
	
	@Autowired
	HistoryMeetingServiceImp HmService;
	
	@Override
	public void save(ScheduleMeeting sm) {
		
		SmRepo.save(sm);
	}

	@Override
	public void remove(ScheduleMeeting sm) {
		SmRepo.delete(sm);
	}

	@Override
	public ScheduleMeeting getBySmId(Long smid) {
		return SmRepo.getById(smid);
	}

	@Override
	public ScheduleMeeting getByMeetingId(Long id) {
		return SmRepo.getByMeetingid(id).get();
	}

	@Override
	public List<ScheduleMeeting> getAllMeeting() {
		return SmRepo.findAll();
	}

	@Override
	public void removePrevious() {
		List<ScheduleMeeting> list = getAllMeeting();
		for(ScheduleMeeting sm : list) {
			if(sm.getDate().isBefore(LocalDate.now()) ) {
				remove(sm);
			}
		}
	}
	
	
	
	
}
