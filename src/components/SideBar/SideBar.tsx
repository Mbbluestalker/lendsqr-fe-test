import React from "react";
import "./SideBar.scss";
import BriefCaseIcon from "../../assets/briefcase 1.svg";
import ArrowDown from "../../assets/arrowdown2.svg";
import HomeIcon from "../../assets/home 1.svg";
import LogOut from "../../assets/sign-out 1.svg";
import {
  customerLinks,
  businessesLinks,
  settingsLinks,
} from "../../data/sidebarData";

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
        <h3>Customers</h3>
        {customerLinks.map((link: any) => {
          const { id, icon, title } = link;
          return (
            <div key={id} className="customer sidebar-link">
              <img src={icon} alt="" />
              <p>{title}</p>
            </div>
          );
        })}
      </section>

      <section className="businesses">
        <h3>Businesses</h3>
        {businessesLinks.map((link: any) => {
          const { id, icon, title } = link;
          return (
            <div key={id} className="business sidebar-link">
              <img src={icon} alt="" />
              <p>{title}</p>
            </div>
          );
        })}
      </section>

      <section className="settings">
        <h3>Settings</h3>
        {settingsLinks.map((link: any) => {
          const { id, icon, title } = link;
          return (
            <div key={id} className="business sidebar-link">
              <img src={icon} alt="" />
              <p>{title}</p>
            </div>
          );
        })}
      </section>

      <section className="logout">
        <img src={LogOut} alt="" />
        <p>Logout</p>
      </section>
    </div>
  );
};
