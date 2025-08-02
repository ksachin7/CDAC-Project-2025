package com.cdac.acts.e_Valuation.dto;

import lombok.Data;

@Data
public class MeetingCreateResponse {
	private Long meetingid;
	private String candidatname;
	private String candidatemail;
	private String interviewername;
	private String intervieweremail;
	private String purpose;
}
