package com.cdac.acts.e_Valuation.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class MeetingCreateWithDate {

	private Long candidateid;
    private Long interviewerid;
    private String purpose;
    private LocalDate date;

}
