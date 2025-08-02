package com.cdac.acts.e_Valuation.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "historymeetings")
public class HistoryMeeting {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long historymeetingid;
	@Column(nullable = false)
	private Long meetingid;
	@Column(nullable = false)
	private LocalDate date;
	@Column(nullable = false)
	private boolean happen;
}
