import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 as uuidv4 } from "uuid";

const VideoCall = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const meetingContainerRef = useRef(null);
  const [hasJoined, setHasJoined] = useState(false);


  


  useEffect(() => {
    if (!roomId || hasJoined || !meetingContainerRef.current) return;

    const appId = 157428648;
    const serverSecret = "23fabf18f4b1a574412413a16f294a7b";
    const userId = uuidv4();

    let userName = "Guest";
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      console.log(storedUser.role);
      if (storedUser?.name) userName = storedUser.name;
    } catch (err) {
      console.warn("User parse failed");
    }

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      userId,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: meetingContainerRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      turnOnCameraWhenJoining: true,
      turnOnMicrophoneWhenJoining: true,
      showScreenSharingButton: false,
      showTextChat: true,
      showUserList: true,
      onLeaveRoom: () => {
        console.log("🎯 User exited meeting, navigating to dashboard.");
        navigate(`/meetingfeedback/${roomId}`);
      },
    });

    console.log("🎉 Joined Zego room:", roomId);
    setHasJoined(true);
  }, [roomId, hasJoined, navigate]);

  return (
    <div 
      ref={meetingContainerRef}
      style={{ width: "100%", height: "95vh" }}
    ></div>
  );
};

export default VideoCall;
