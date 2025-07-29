package com.cdac.acts.e_Valuation.dto;

import lombok.Data;

@Data
public class MeetingCreate {

	private Long meetingid;
	private Long candidateid;
	private Long interviewerid;
	private String purpose;
	
}
