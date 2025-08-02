package com.cdac.acts.e_Valuation.service;

import java.util.Optional;

import com.cdac.acts.e_Valuation.entity.ScheduleMeeting;

public interface ScheduleMeetingService {
//	Optional<ScheduleMeeting> createScheduleMeeting(Long meetingId, )
	void save(ScheduleMeeting sm);
	
	void remove(ScheduleMeeting sm);
	
	ScheduleMeeting getBySmId(Long smid);
	
	ScheduleMeeting getByMeetingId(Long id);
}
