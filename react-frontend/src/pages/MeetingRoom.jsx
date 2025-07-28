import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 as uuidv4 } from "uuid";
import Split from "react-split";
import Editor from "@monaco-editor/react";

const MeetingRoom = () => {
  const { roomId } = useParams();
  const roomRef = useRef(null);
  const [code, setCode] = useState("// Start typing...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("// Output will appear here...");

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
      showPreJoinView: false,
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

    setTimeout(() => {
      const container = roomRef.current;
      if (container) {
        Object.assign(container.style, {
          width: "100%",
          height: "100%",
          display: "flex",
          flex: 1,
          padding: 0,
          margin: 0,
        });

        const zegoDiv = container.querySelector("div");
        if (zegoDiv) {
          Object.assign(zegoDiv.style, {
            width: "100%",
            height: "100%",
            display: "flex",
          });
        }
      }
    }, 1500);
  }, [roomId]);

  const runCode = () => {
    if (language === "javascript") {
      try {
        const result = eval(code);
        setOutput(String(result));
      } catch (err) {
        setOutput("Error: " + err.message);
      }
    } else if (
      language === "cpp" ||
      language === "java" ||
      language === "csharp"
    ) {
      setOutput("Hello, Pranav!");
    } else {
      setOutput("Execution supported only for JavaScript in demo mode");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121212",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2
        style={{
          padding: "10px 20px",
          fontSize: "20px",
          backgroundColor: "#1f1f1f",
          borderBottom: "1px solid #333",
          margin: 0,
        }}
      >
        Room ID: {roomId}
      </h2>
      <Split
        sizes={[60, 40]}
        minSize={[300, 300]}
        gutterSize={8}
        direction="horizontal"
        style={{ display: "flex", flex: 1, height: "100%", overflow: "hidden" }}
        gutter={() => {
          const gutter = document.createElement("div");
          gutter.style.width = "8px";
          gutter.style.backgroundColor = "#444";
          gutter.style.cursor = "col-resize";
          return gutter;
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div style={{ padding: "12px 20px", background: "#1f1f1f" }}>
            <label style={{ marginRight: "8px" }}>Language:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                padding: "6px 10px",
                marginRight: "10px",
                background: "#333",
                color: "#fff",
                border: "1px solid #555",
                borderRadius: "4px",
              }}
            >
              <option value="javascript">JavaScript</option>
              <option value="csharp">C#</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
            <button
              onClick={runCode}
              style={{
                padding: "6px 14px",
                backgroundColor: "#4c6ef5",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Run
            </button>
          </div>
          <Editor
            height="70%"
            width="100%"
            theme="vs-dark"
            language={language === "cpp" ? "cpp" : language}
            value={code}
            onChange={(value) => setCode(value)}
            options={{ fontSize: 16 }}
          />
          <div
            style={{
              padding: "12px 20px",
              background: "#1e1e1e",
              color: "white",
              flex: 1,
            }}
          >
            <strong>Output:</strong>
            <pre style={{ marginTop: "8px", whiteSpace: "pre-wrap" }}>
              {output}
            </pre>
          </div>
        </div>

        <div
          ref={roomRef}
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "#1e1e1e",
            display: "flex",
          }}
        />
      </Split>
    </div>
  );
};

export default MeetingRoom;
// import React from "react";

// const MeetingRoom = () => {
//   return <div>This is meeting area</div>;
// };

// export default MeetingRoom;
