package com.cdac.acts.e_Valuation.service;

import java.util.Optional;

import com.cdac.acts.e_Valuation.entity.User;

public interface UserService {

	User getUserByEmail(String email);
	
	Optional<User> getUserById(Long id);
	
	void updateUserRole(Long id, String newRole);
}