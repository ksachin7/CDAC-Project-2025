package com.cdac.acts.e_Valuation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.acts.e_Valuation.entity.HistoryMeeting;
import com.cdac.acts.e_Valuation.repository.HistoryMeetingRepositry;

@Service
public class HistoryMeetingServiceImp implements HistoryMeetingService {

	@Autowired
	HistoryMeetingRepositry HMRepo;
	
	@Override
	public void save(HistoryMeeting hm) {
		HMRepo.save(hm);
	}

	@Override
	public void remove(HistoryMeeting hm) {
		HMRepo.delete(hm);
	}

	@Override
	public HistoryMeeting getByMeetingId(Long id) {
		return HMRepo.getByMeetingid(id);
	}

	@Override
	public List<HistoryMeeting> getAll() {
		
		return HMRepo.findAll();
	}
}
