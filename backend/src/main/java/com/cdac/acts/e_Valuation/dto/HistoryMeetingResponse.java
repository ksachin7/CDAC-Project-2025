package com.cdac.acts.e_Valuation.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class HistoryMeetingResponse {
	private Long historymeetingid;
	private Long meetingid;
	private LocalDate date;
	private boolean happen;
	private String purpose;
	private int rating;
	private String review;
	private String candidatname;
	private String candidatemail;
	private String interviewername;
	private String intervieweremail;
}
