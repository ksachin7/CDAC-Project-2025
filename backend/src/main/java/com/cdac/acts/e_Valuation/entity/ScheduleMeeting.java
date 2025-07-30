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
@Table(name = "schedulemeetings")
public class ScheduleMeeting {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long scheduleid;
	
	@Column(nullable = false)
	private Long meetingid;
	
	@Column(nullable = false)
	private LocalDate date;
	
	@Column(nullable = false)
	@NotBlank
	private String purpose;

	@Override
	public String toString() {
		return "ScheduleMeeting [scheduleid=" + scheduleid + ", meetingid=" + meetingid + ", date=" + date
				+ ", purpose=" + purpose + "]";
	}
	
	
}
