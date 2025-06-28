package com.cdac.acts.e_Valuation.dto;

import com.cdac.acts.e_Valuation.enums.Role;

import lombok.Data;

@Data
public class RegisterRequest {
    private String email;
    private String password;
    private Role role;
}
