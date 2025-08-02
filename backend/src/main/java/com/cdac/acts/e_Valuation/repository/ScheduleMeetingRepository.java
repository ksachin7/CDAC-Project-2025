package com.cdac.acts.e_Valuation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.acts.e_Valuation.entity.ScheduleMeeting;

public interface ScheduleMeetingRepository extends JpaRepository<ScheduleMeeting, Long> {
	Optional<ScheduleMeeting> getByMeetingid(Long meetingid);
}
