import React from "react";

const Console = ({ logs }) => {
  return (
    <div className="console">
      <h3>Console</h3>
      <div className="console-logs">
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default Console;
