import React, { useState } from "react";
import "./DebugPanel.scss";
function DebugPanel({ data }) {
  return <pre className="DebugPanel">{JSON.stringify(data, null, 2)}</pre>;
}
export default DebugPanel;
