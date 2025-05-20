package com.cdac.acts.e_Valuation.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

//@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class MyController {

    @GetMapping("/message")
    public Map<String, String> getMessage() {
        return Map.of("message", "Hello from Spring Boot!");
    }
}
