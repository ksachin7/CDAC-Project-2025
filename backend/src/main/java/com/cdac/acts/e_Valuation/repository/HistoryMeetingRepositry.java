package com.cdac.acts.e_Valuation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.acts.e_Valuation.entity.HistoryMeeting;

public interface HistoryMeetingRepositry extends JpaRepository<HistoryMeeting, Long> {
	HistoryMeeting getByMeetingid(Long id);
}
