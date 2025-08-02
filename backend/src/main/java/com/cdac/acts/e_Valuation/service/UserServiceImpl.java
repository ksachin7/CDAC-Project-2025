package com.cdac.acts.e_Valuation.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cdac.acts.e_Valuation.entity.User;
import com.cdac.acts.e_Valuation.enums.Role;
import com.cdac.acts.e_Valuation.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public User getUserByEmail(String email) {
		return userRepo.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with email:" + email));
	}

	// not using it now
	@Override
	public void updateUserRole(Long userId, String newRole) {
		Role role;
		
		try {
			role = Role.valueOf(newRole.toUpperCase());
		} catch (IllegalArgumentException e) {
			throw new RuntimeException("Invalid role" + newRole);
		}

		User user = userRepo.findById(userId)
				.orElseThrow(() -> new RuntimeException("User not find with id: " + userId));
		user.setRole(role);
		
		userRepo.save(user);
	}

	@Override
	public Optional<User> getUserById(Long id) {
		return userRepo.findById(id);
	}

}
