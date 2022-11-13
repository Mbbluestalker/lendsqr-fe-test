import React from "react";
import "./SideBar.scss";
import BriefCaseIcon from "../../assets/briefcase 1.svg";
import ArrowDown from "../../assets/arrowdown2.svg";
import HomeIcon from "../../assets/home 1.svg";
import { customerLinks } from "../../data/sidebarData";



export const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-head">
        <img src={BriefCaseIcon} alt="" />
        <p>Switch Organization</p>
        <img src={ArrowDown} alt="" />
      </div>

      <div className="dashboard">
        <img src={HomeIcon} alt="" />
        <p>Dashboard</p>
      </div>

      <section className="customers">
        {customerLinks.map((link: any) => {
          const { id, icon, title } = link;
          return (
            <div key={id} className="customer">
              <img src={icon} alt="" />
              <p>{title}</p>

            </div>
          )
        })}
      </section>

      <section className="businesses">

      </section>

      <section className="settings">
        
      </section>

    </div>
  );
};
