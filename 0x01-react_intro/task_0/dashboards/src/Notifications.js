import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png"; 

function Notifications() {

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent">New data available</li>
      </ul>
      <button type="button" style={{color: "#ffffff", fontWeight:"bold", fontSize: "20px", float: "right",}} 
      aria-label="close"   onClick={console.log("Close button has been clicked")} >Close  <img src={closeIcon} alt="closeIcon" width="20px"/></button>

    
    </div>
  );
  }
  export default Notifications; 