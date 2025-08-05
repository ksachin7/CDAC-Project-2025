package com.cdac.acts.e_Valuation.service;


import java.util.List;

import com.cdac.acts.e_Valuation.entity.HistoryMeeting;

public interface HistoryMeetingService {

	void save(HistoryMeeting hm);
	void remove(HistoryMeeting hm);
	HistoryMeeting getByMeetingId(Long id);
	List<HistoryMeeting> getAll();
}
