import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 as uuidv4 } from "uuid";

const VideoCall = ({ roomId }) => {
  const roomRef = useRef(null);

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
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
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

  return <div className="video-call" ref={roomRef}></div>;
};

export default VideoCall;
