import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  SideBar,
  UserCard,
  UserDetails,
  FilterCard,
  UserPopupCard,
} from "./components";
import { Login, Dashboard, Users, UsersDetails } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SideBar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<Users />} />
              <Route path="/usersdetails" element={<UsersDetails />} />
            </Routes>
        </SideBar>
      </BrowserRouter>
      {/* <NavBar />
      <SideBar />
      <UserCard /> 
      <UserDetails />
      <FilterCard />
      <UserPopupCard /> */}
    </div>
  );
}

export default App;
