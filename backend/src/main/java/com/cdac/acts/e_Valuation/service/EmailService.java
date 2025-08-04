package com.cdac.acts.e_Valuation.service;

public interface EmailService {
	public void sendSimpleEmail(String to, String subject, String text);
	
	public void authenticateEmail(Long code, String to);
	
	public void meetingEndEmail(Long meetingid);

	void meetingCreateEmailToCandidate(String to, String text);

	void registerEmail(String to, String text);
}
