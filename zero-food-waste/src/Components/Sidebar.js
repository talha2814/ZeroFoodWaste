import React from 'react';
import { sidebarData } from './sidebarData';
import '../CSS/Sidebar.css';
function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="Sidebarlist">
        {sidebarData.map((val, key) => {
          if (val.title !== "Log Out") {
            return (
              <li key={key} className="row" onClick={() => { window.location.pathname = val.link; }}>
                <div className="icon">{val.icon}</div>
                <div className="title">{val.title}</div>
              </li>
            );
          }
          return null; 
        })}
      </ul>
      <div className="Sidebar-Logout">
        {sidebarData.filter(val => val.title === "Log Out").map((val, key) => {
          return (
            <li key={key} className="row logout" onClick={() => { window.location.pathname = val.link; }}>
              <div className="icon">{val.icon}</div>
              <div className="title">{val.title}</div>
            </li>
          );
        })}
      </div>

    </div>
  );
}

export default Sidebar;
