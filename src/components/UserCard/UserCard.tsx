import React from "react";
import "./UserCard.scss";
import { userCard } from "../../data/userCardData";

export const UserCard = () => {
  return (
    <div className="user-card-container">
      {userCard.map((user: any) => {
        return (
          <div className="user-card" key={user.id}>
            <img src={user.icon} alt="" />
            <p className="title">{user.title}</p>
            <p className="count"> {user.count}</p>
          </div>
        );
      })}
      </div>
  );
};
