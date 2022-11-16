import React, { useState, useEffect } from "react";
import axios from "axios";

import { UserCard, UserDetails } from "../../components";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <UserCard users={users} />
      <UserDetails users={users} />
    </div>
  );
};
