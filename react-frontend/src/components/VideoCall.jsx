import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 } from "uuid";

const VideoCall = () => {
  const { roomId } = useParams();
  const hasJoinedRef = useRef(false);

  console.log("📦 Received roomId:", roomId);

  async function meetingUI(element) {
    if (hasJoinedRef.current || !element || !roomId) {
      console.warn(
        "⚠️ Already joined, element not available, or roomId missing."
      );
      return;
    }

    hasJoinedRef.current = true;

    const appId = 157428648;
    const serverSecret = "23fabf18f4b1a574412413a16f294a7b";
    const userId = v4();

    
    let userName = "Guest";
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        userName = parsedUser.name || "Guest";
      } catch (error) {
        console.warn("⚠️ Could not parse user from localStorage:", error);
      }
    }

    try {
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
        serverSecret,
        roomId,
        userId,
        userName
      );

      const ui = ZegoUIKitPrebuilt.create(kitToken);

      await ui.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
        turnOnCameraWhenJoining: true,
        turnOnMicrophoneWhenJoining: true,
        showTextChat: true,
        showScreenSharingButton: true,
      });

      console.log("🎉 Successfully joined the room.");
    } catch (err) {
      console.error("❌ Failed to join the room. Error:", err);
      alert("Failed to join the room. Check console for details.");
    }
  }

  return <div ref={meetingUI} style={{ width: "100%", height: "95vh" }}></div>;
};

export default VideoCall;
