package com.cdac.acts.e_Valuation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.acts.e_Valuation.entity.Meeting;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long> {

}
