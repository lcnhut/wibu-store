import React from "react";
import "./CricleColor.scss";
export default function CricleColor({ color }) {
  return (
    <div className="circle-color-border">
      <div className="circle-color" style={{ backgroundColor: color }}></div>
    </div>
  );
}
