package com.cdac.acts.e_Valuation.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.acts.e_Valuation.entity.User;
import com.cdac.acts.e_Valuation.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	
	public Long getValidId(String email) {
		Optional<User> user = userRepo.findByEmail(email);
		
		if(user==null) {
			System.out.println("nullllllllllllllllll");
			return (long) -1;
		}
		else {
			return user.get().getId();
		}
	}
	
	public String getValidEmail(Long id) {
		System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
		Optional<User> user = userRepo.findById(id);
		
		if(user==null) {
			return null;
		}
		else {
			return user.get().getEmail();
		}
	}
}
