package com.cdac.acts.e_Valuation.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
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
	private Long historyid;
	
	@Column(nullable = false)
	private Long meetingid;
	
	@Column(nullable = false)
	private LocalDate date;
	
	@Column(nullable = false)
	@NotBlank
	private String purpose;
	
	@Column(nullable = false)
	private int duration;

	@Override
	public String toString() {
		return "HistoryMeeting [historyid=" + historyid + ", meetingid=" + meetingid + ", date=" + date + ", purpose="
				+ purpose + ", duration=" + duration + "]";
	}
	
	
}
