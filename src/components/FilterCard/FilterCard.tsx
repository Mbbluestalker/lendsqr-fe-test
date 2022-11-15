import React from "react";
import "./FilterCard.scss";

export const FilterCard = () => {
  return (
    <div className="filter-container">
      <>
        <div className="organization filter-input">
          <label htmlFor="organization">Organization</label>
          <select name="organization" id="organization">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="username filter-input">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="Username" />
        </div>

        <div className="email filter-input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>

        <div className="date filter-input">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            onChange={(e) => console.log(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            placeholder="Date"
          />
        </div>

        <div className="phonenumber filter-input">
          <label htmlFor="phonenumber">Phone Number</label>
          <input type="text" name="phonenumber" id="phonenumber" placeholder="Phone Number" />
        </div>

        <div className="status filter-input">
          <label htmlFor="status">Status</label>
          <select name="status" id="status"></select>
        </div>

        <div className="filter-btn">
          <button className="reset-btn">Reset</button>
          <button className="filter-btn">Filter</button>
        </div>
      </>
    </div>
  );
};
