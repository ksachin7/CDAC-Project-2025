import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

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

  const runCode = async () => {
    const languageId = languageMap[language];
    setOutput("Running...");

    try {
      const response = await axios.post("http://localhost:8080/api/code/run", {
        languageId,
        sourceCode: code,
      });

      const result = response.data;
      if (result.stdout) {
        setOutput(result.stdout);
      } else if (result.stderr) {
        setOutput(result.stderr);
      } else if (result.compile_output) {
        setOutput(result.compile_output);
      } else {
        setOutput("No output.");
      }
    } catch (err) {
      setOutput(err.message || "Execution failed");
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
        <button onClick={runCode}>Run</button>
      </div>
      <Editor
        height="300px"
        theme="vs-dark"
        language={language === "cpp" ? "cpp" : language}
        value={code}
        onChange={(val) => setCode(val)}
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
