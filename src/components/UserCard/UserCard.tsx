import React from "react";
import "./UserCard.scss";
// import { userCard } from "../../data/userCardData";
import UserIcon from '../../assets/users_main_dashboard.svg'
import ActiveUserIcon from '../../assets/active_users.svg'
import UsersWithLoansIcon from '../../assets/users_with_loans.svg'
import UsersWithSavingsIcon from '../../assets/users_with_savings.svg'




export const UserCard = (users: any) => {
  const userCard: any  =[

    {
        id: 1,
        title: 'Users',
        icon: UserIcon,
        count: users.users.length

    },
    {
        id: 2,
        title: 'Active Users',
        icon: ActiveUserIcon,
        count: 2543

    },
    {
        id: 3,
        title: 'Users with Loans',
        icon: UsersWithLoansIcon,
        count: 12543

    },
    {
        id: 1,
        title: 'Users with Savings',
        icon: UsersWithSavingsIcon,
        count: 102543

    }

]
  return (
    <div className="user-card-container">
      {userCard.map((user: any) => {
        return (
          <div className="user-card">
          <div  key={user.id}>
            <img src={user.icon} alt="" />
            <p className="title">{user.title}</p>
            
          <p className="count"> {user.count}</p>
          </div>
          </div>
        );
      })}
      </div>
  );
};
