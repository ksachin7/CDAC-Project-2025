package com.cdac.acts.e_Valuation.entity;

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
@Table(name = "meetings")
public class Meeting {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long meetingid;
	
	@Column(nullable = false)
	private Long candidateid;
	
	@Column(nullable = false)
	private Long interviewerid;
	
	@Column(nullable = false)
	@NotBlank
	private String purpose;

	public Long getMeetingid() {
		return meetingid;
	}

	public void setMeetingid(Long meetingid) {
		this.meetingid = meetingid;
	}

	public Long getCandidateid() {
		return candidateid;
	}

	public void setCandidateid(Long candidateid) {
		this.candidateid = candidateid;
	}

	public Long getInterviewerid() {
		return interviewerid;
	}

	public void setInterviewerid(Long interviewerid) {
		this.interviewerid = interviewerid;
	}

	public String getPurpose() {
		return purpose;
	}

	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}

	@Override
	public String toString() {
		return "Meeting [meetingid=" + meetingid + ", candidateid=" + candidateid + ", interviewerid=" + interviewerid
				+ ", purpose=" + purpose + "]";
	}
	
}
