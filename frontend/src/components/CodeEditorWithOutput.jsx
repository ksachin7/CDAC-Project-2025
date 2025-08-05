import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import axios from "axios";
import api from "../api";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

const languageMap = {
  javascript: 63,
  java: 62,
  cpp: 54,
  csharp: 51,
};

const CodeEditorWithOutput = () => {
  const [code, setCode] = useState("// Start typing...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("// Output will appear here...");
  const [loading, setLoading] = useState(false);

  const stompClient = useRef(null);
  const senderId = useRef(uuidv4());
  const { roomId } = useParams(); // room ID from URL

  useEffect(() => {
    const socket = new SockJS(`${import.meta.env.VITE_API_URL}/ws`);
    stompClient.current = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      onConnect: () => {
        stompClient.current.subscribe(`/topic/code/${roomId}`, (message) => {
          const body = JSON.parse(message.body);
          if (body.sender !== senderId.current) {
            // console.log("📥 [React] Received code update via WebSocket.");
            setCode(body.code);
            setLanguage(
              Object.keys(languageMap).find(
                (key) => languageMap[key] === body.languageId
              ) || "javascript"
            );
          }
        });
      },
    });
    stompClient.current.activate();
    return () => stompClient.current.deactivate();
  }, [roomId]);

  const handleCodeChange = (val) => {
    setCode(val);
    if (stompClient.current && stompClient.current.connected) {
      // console.log("📤 [React] Sending code update via WebSocket.");
      stompClient.current.publish({
        destination: "/app/code.send",
        body: JSON.stringify({
          code: val,
          languageId: languageMap[language],
          sender: senderId.current,
          roomId,
        }),
      });
    }
  };

  const runCode = async () => {
    const languageId = languageMap[language];
    setOutput("Running...");
    try {
      const response = await api.post(`api/code/run`, {
        languageId,
        sourceCode: code,
      });
      const result = response.data;
      setOutput(
        result.stdout || result.stderr || result.compile_output || "No output"
      );
    } catch (err) {
      console.error(err);
      setOutput("Execution failed");
    }
  };

  return (
    <div className="code-editor">
      <div className="toolbar">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="csharp">C#</option>
        </select>
        <button onClick={runCode} disabled={loading}>
          {loading ? "Running..." : "Run"}
        </button>
      </div>
      <Editor
        height="300px"
        theme="vs-dark"
        language={language === "cpp" ? "cpp" : language}
        value={code}
        onChange={handleCodeChange}
        options={{ fontSize: 16 }}
      />
      <div className="output">
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditorWithOutput;
