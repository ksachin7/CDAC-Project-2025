package com.cdac.acts.e_Valuation.dto;

public class CodeUpdate {
	private String code;
    private int languageId;
    private String sender;
    private String roomId;

    // Getters and Setters

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public int getLanguageId() { return languageId; }
    public void setLanguageId(int languageId) { this.languageId = languageId; }

    public String getSender() { return sender; }
    public void setSender(String sender) { this.sender = sender; }

    public String getRoomId() { return roomId; }
    public void setRoomId(String roomId) { this.roomId = roomId; }
}
