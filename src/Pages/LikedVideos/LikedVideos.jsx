import React from "react";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/SideBar";

export const LikedVideos = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="sidebar_container_dashboard">
          <SideBar />
        </div>
        <div className="navbar_and_content_container">
          <Navbar />
          LikedVideos
        </div>
      </div>
    </div>
  );
};
