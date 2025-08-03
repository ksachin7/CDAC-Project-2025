package com.cdac.acts.e_Valuation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    private UserService userService;

    @Override
    public void sendSimpleEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("agrawalbhumur@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
    }

	@Override
	public void authenticateEmail(Long code, String to) {
		SimpleMailMessage mail = new SimpleMailMessage();
		String text = "Dear User,\r\n"
				+ "\r\n"
				+ "Your authentication code is:\r\n"
				+ code +"\r\n"
				+ "\r\n"
				+ "Please use this code to complete your verification.\r\n"
				+ "\r\n"
				+ "This code is valid for 10 minutes.\r\n"
				+ "\r\n"
				+ "If you did not request this code, please ignore this email.\r\n"
				+ "\r\n"
				+ "Thanks,\r\n"
				+ "The E-valution Team";
		mail.setFrom("agrawalbhumur@gmail.com");
		mail.setTo(to);
		mail.setSubject("Your Authentication Code for E-Valuation");
		mail.setText(text);
		mailSender.send(mail);
	}

	@Override
	public void registerEmail(String to, String text) {
		SimpleMailMessage mail = new SimpleMailMessage();
		
		mail.setFrom("agrawalbhumur@gmail.com");
		mail.setTo(to);
		mail.setSubject("Your Registration on E-Valuation");
		mail.setText(text);
		mailSender.send(mail);
	}

	
	@Override
	public void meetingEndEmail(Long meetingid) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void meetingCreateEmailToCandidate(String to, String text ) {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setFrom("agrawalbhumur@gmail.com");
		mail.setTo(to);
		mail.setSubject("Meeting Invitation on E-Valuation");
		mail.setText(text);
		mailSender.send(mail);
	}
    
    
}
