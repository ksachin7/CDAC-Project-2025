// CodeEditorWithOutput.jsx
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWithOutput = () => {
  const [code, setCode] = useState("// Start typing...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("// Output will appear here...");

  const runCode = () => {
    if (language === "javascript") {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(code);
        setOutput(String(result));
      } catch (err) {
        setOutput("Error: " + err.message);
      }
    } else {
      setOutput("Hello, Pranav!");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
        <pre style={{ marginTop: "8px", whiteSpace: "pre-wrap" }}>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditorWithOutput;
