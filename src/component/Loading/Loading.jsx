// import React from "react";
import { Spin } from "antd";
import "./loading.css";
// <div className="spinner">
// </div>
function Loading() {
  return (
    <div className="spinner-container-submit">
      <Spin />
    </div>
  );
}

export default Loading;
