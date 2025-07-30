package com.cdac.acts.e_Valuation.controller;

import org.springframework.web.bind.annotation.*;

import com.cdac.acts.e_Valuation.dto.CodeRequest;

import java.net.URI;
import java.net.http.*;
import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("api/code")
public class CodeController {
	private static final String API_KEY = "d17f76f8e9msh8e536a5e0f44510p1753a8jsnd81c59913839";
    private static final String API_HOST = "judge0-ce.p.rapidapi.com";
    private static final String SUBMISSION_URL = "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true";

    @PostMapping("/run")
    public String runCode(@RequestBody CodeRequest request) throws Exception {
        String json = String.format(
                "{\"language_id\": %d, \"source_code\": \"%s\"}",
                request.getLanguageId(),
                escapeJson(request.getSourceCode())
        );

        HttpRequest httpRequest = HttpRequest.newBuilder()
                .uri(URI.create(SUBMISSION_URL))
                .header("Content-Type", "application/json")
                .header("x-rapidapi-key", API_KEY)
                .header("x-rapidapi-host", API_HOST)
                .POST(HttpRequest.BodyPublishers.ofString(json, StandardCharsets.UTF_8))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> response = client.send(httpRequest, HttpResponse.BodyHandlers.ofString());

        return response.body();
    }

    private String escapeJson(String code) {
        return code.replace("\\", "\\\\")
                   .replace("\"", "\\\"")
                   .replace("\n", "\\n")
                   .replace("\r", "\\r");
    }
}
