package com.cdac.acts.e_Valuation.service;

import com.cdac.acts.e_Valuation.entity.User;

public interface UserService {

	User getUserByEmail(String email);
}