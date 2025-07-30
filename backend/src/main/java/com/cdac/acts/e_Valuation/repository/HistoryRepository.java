package com.cdac.acts.e_Valuation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.acts.e_Valuation.entity.HistoryMeeting;

@Repository
public interface HistoryRepository extends JpaRepository<HistoryMeeting, Long> {

}
