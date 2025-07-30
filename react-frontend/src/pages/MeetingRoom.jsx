import React from "react";
import Split from "react-split";
import CodeEditorWithOutput from "../components/CodeEditorWithOutput";
import VideoCall from "../components/VideoCall";
import "../styles/room.css";

const MeetingRoom = () => {
  return (
    <div className="room-container">
      <h2 className="room-header">Room ID: XYZ</h2>
      <Split
        sizes={[50, 50]}
        minSize={[300, 300]}
        gutterSize={8}
        direction="horizontal"
        className="room-split"
        gutter={() => {
          const gutter = document.createElement("div");
          gutter.className = "room-gutter";
          return gutter;
        }}
      >
        <CodeEditorWithOutput />
        <VideoCall />
      </Split>
    </div>
  );
};

export default MeetingRoom;
