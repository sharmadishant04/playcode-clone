import React, { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import CodeEditor from "./components/CodeEditor";
import Console from "./components/Console";
import WebPreview from "./components/WebPreview";
import "./App.css";

const App = () => {
  const [code, setCode] = useState(`console.log("Hello, World!");`);
  const [logs, setLogs] = useState([]);

  // Override console.log to capture logs
  const captureLogs = () => {
    const originalLog = console.log;
    console.log = (...args) => {
      setLogs((prevLogs) => [...prevLogs, args.join(" ")]);
      originalLog(...args);
    };
  };

  React.useEffect(() => {
    captureLogs();
  }, []);

  return (
    <div className="app">
      <div className="sidebar">
        <FileExplorer />
      </div>
      <div className="main">
        <CodeEditor code={code} setCode={setCode} />
        <WebPreview code={code} />
        <Console logs={logs} />
      </div>
    </div>
  );
};

export default App;
