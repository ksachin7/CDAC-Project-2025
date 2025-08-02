package com.cdac.acts.e_Valuation.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.cdac.acts.e_Valuation.dto.CodeUpdate;

@Controller
public class CodeSocketController {

    private final SimpMessagingTemplate messagingTemplate;

    public CodeSocketController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @MessageMapping("/code.send")
    public void sendCode(@Payload CodeUpdate update) {
        messagingTemplate.convertAndSend("/topic/code/" + update.getRoomId(), update);
    }
}
