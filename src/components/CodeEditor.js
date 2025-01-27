import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode }) => {
  return (
    <MonacoEditor
      height="50vh"
      language="javascript"
      theme="vs-dark"
      value={code}
      onChange={(newValue) => setCode(newValue)}
    />
  );
};

export default CodeEditor;
