package com.cdac.acts.e_Valuation.dto;

import lombok.Data;

@Data
public class MeetingFinishRequest {
	private Long meetingid;
	private int rating;
	private String review;
}
