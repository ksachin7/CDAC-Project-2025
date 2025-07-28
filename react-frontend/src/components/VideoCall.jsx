// VideoCall.jsx
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 as uuidv4 } from "uuid";

const VideoCall = () => {
  const roomRef = useRef(null);
  const { roomId } = useParams();

  useEffect(() => {
    const appId = 157428648;
    const serverSecret = "23fabf18f4b1a574412413a16f294a7b";
    const userId = uuidv4();
    const userName = "Dev";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      userId,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: roomRef.current,
      scenario: { mode: ZegoUIKitPrebuilt.VideoConference },
      turnOnCameraWhenJoining: true,
      turnOnMicrophoneWhenJoining: true,
      showTextChat: true,
      showScreenSharingButton: true,
      showUserList: true,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,
      showLeavingView: true,
      sharedLinks: [
        {
          name: "Copy Room Link",
          url: window.location.href,
        },
      ],
    });
  }, [roomId]);

  return (
    <div
      ref={roomRef}
      style={{
        display: "flex",
        flex: 1,
        height: "100%",
        backgroundColor: "#1e1e1e",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default VideoCall;
