package com.cdac.acts.e_Valuation.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.acts.e_Valuation.dto.MeetingCreate;
import com.cdac.acts.e_Valuation.dto.MeetingCreateResponse;
import com.cdac.acts.e_Valuation.entity.HistoryMeeting;
import com.cdac.acts.e_Valuation.entity.Meeting;
import com.cdac.acts.e_Valuation.entity.ScheduleMeeting;
import com.cdac.acts.e_Valuation.repository.MeetingRepository;

@Service
public class MeetingService {
	
	@Autowired
	private MeetingRepository meetingRepo;
	
	@Autowired
	 private ScheduleMeetingServiceImp SmService;
	
	@Autowired
	private HistoryMeetingServiceImp HmService;
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private UserService userService;
	
	public Long create(Long cid, Long iid, String porpose, LocalDate date) {
		SmService.removePrevious();
		Meeting meet = new Meeting();
		meet.setCandidateid(cid);
		meet.setInterviewerid(iid);
		meet.setPurpose(porpose);
		meetingRepo.save(meet);
		ScheduleMeeting sm = new ScheduleMeeting();
		sm.setMeetingid(meet.getMeetingid());
		sm.setDate(date);
		SmService.save(sm);
		System.out.println(sm);
		//emailService.sendSimpleEmail("19dcs009@lnmiit.ac.in", "Testing", "hello");
		return meet.getMeetingid();
	}

	public void MeetingHappen(Long meetingId) {
		SmService.removePrevious();
		ScheduleMeeting sm = SmService.getByMeetingId(meetingId);
		Meeting meet = meetingRepo.getById(meetingId);
		HistoryMeeting hm = new HistoryMeeting();
		hm.setDate(sm.getDate());
		hm.setHappen(true);
		hm.setMeetingid(meetingId);
		HmService.save(hm);
		SmService.remove(sm);
	}
	
	public List<MeetingCreate> getMeetingsByUserId(Long userId) {
		SmService.removePrevious();
	    List<Meeting> resList= meetingRepo.findByCandidateidOrInterviewerid(userId, userId);
	    List<ScheduleMeeting> smlist = SmService.getAllMeeting();
	    List<MeetingCreate> dtoList = new ArrayList<MeetingCreate>();
	    for(ScheduleMeeting sm : smlist) {
	    	MeetingCreate dto = new MeetingCreate();
	    	Meeting meet = meetingRepo.getById(sm.getMeetingid());
	    	dto.setCandidateid(meet.getCandidateid());
	    	dto.setInterviewerid(meet.getInterviewerid());
	    	dto.setMeetingid(meet.getMeetingid());
	    	dto.setPurpose(meet.getPurpose());
	    	dtoList.add(dto);
	    }
//	    for(Meeting item :resList) {
//	    	MeetingCreate dto = new MeetingCreate();
//	    	dto.setCandidateid(item.getCandidateid());
//	    	dto.setInterviewerid(item.getInterviewerid());
//	    	dto.setMeetingid(item.getMeetingid());
//	    	dto.setPurpose(item.getPurpose());
//	    	
//	    	dtoList.add(dto);
//	    	
//	    }
	    return dtoList;
	}
	
	public List<MeetingCreateResponse> getMeetingListByUserId(Long userId) {
		SmService.removePrevious();
	    List<ScheduleMeeting> smlist = SmService.getAllMeeting();
	    List<MeetingCreateResponse> dtoList = new ArrayList<MeetingCreateResponse>();
	    for(ScheduleMeeting sm : smlist) {
	    	MeetingCreateResponse dto = new MeetingCreateResponse();
	    	Meeting meet = meetingRepo.getById(sm.getMeetingid());
	    	dto.setCandidatname(userService.getUserById(meet.getCandidateid()).get().getName());
	    	dto.setCandidatemail(userService.getUserById(meet.getCandidateid()).get().getEmail());
	    	dto.setInterviewername(userService.getUserById(meet.getInterviewerid()).get().getName());
	    	dto.setIntervieweremail(userService.getUserById(meet.getInterviewerid()).get().getEmail());
	    	
	    	dto.setDate(sm.getDate());
	    	dto.setMeetingid(meet.getMeetingid());
	    	dto.setPurpose(meet.getPurpose());
	    	dtoList.add(dto);
	    }
	    return dtoList;
	}

	public MeetingCreateResponse getCompleteNotification(MeetingCreate meet,LocalDate date) {
		
		MeetingCreateResponse dto = new MeetingCreateResponse();
		dto.setCandidatname(userService.getUserById(meet.getCandidateid()).get().getName());
    	dto.setCandidatemail(userService.getUserById(meet.getCandidateid()).get().getEmail());
    	dto.setInterviewername(userService.getUserById(meet.getInterviewerid()).get().getName());
    	dto.setIntervieweremail(userService.getUserById(meet.getInterviewerid()).get().getEmail());
    	dto.setMeetingid(meet.getMeetingid());
    	dto.setPurpose(meet.getPurpose());
    	dto.setDate(date);
		return dto;
	}
	
	 

}
