import React from "react";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/SideBar";

export const History = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="sidebar_container_dashboard">
          <SideBar />
        </div>
        <div className="navbar_and_content_container">
          <Navbar />
          HEllo
        </div>
      </div>
    </div>
  );
};
