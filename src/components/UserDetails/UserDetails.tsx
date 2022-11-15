import React from "react";
import "./UserDetails.scss";
import FilterIcon from "../../assets/filter-results-button.svg";
import DottedIcon from "../../assets/three_dotted.svg";
import ArrowDownIcon from "../../assets/arrowdown2.svg";
import NextForward from "../../assets/next_forward.svg";
import NextPrev from "../../assets/next_prev.svg";
import DottedHorizontal from "../../assets/dotted_horizontal.svg";

export const UserDetails = ({ users }: any) => {
  return (
    <>
      <div className="user-details-container">
        <table>
          <th>
            <div className="table-head">
              <p>Organization</p>
              <img src={FilterIcon} alt="" />
            </div>
          </th>
          <th>
            <div className="table-head">
              <p>Username</p>
              <img src={FilterIcon} alt="" />
            </div>
          </th>
          <th>
            <div className="table-head">
              <p>Email</p>
              <img src={FilterIcon} alt="" />
            </div>
          </th>
          <th>
            <div className="table-head">
              <p>Phone Number</p>
              <img src={FilterIcon} alt="" />
            </div>
          </th>
          <th>
            <div className="table-head">
              <p>Date Joined</p>
              <img src={FilterIcon} alt="" />
            </div>
          </th>
          <th>
            <div className="table-head">
              <p>Status</p>
              <img src={FilterIcon} alt="" />
            </div>
          </th>

          {users.map((user: any) => {
            const { id, orgName, userName, email, phoneNumber, createdAt , status } =
              user;
            return (
              <tr key={id}>
                <td>
                  <p>{orgName}</p>
                </td>
                <td>
                  <p>{userName}</p>
                </td>
                <td>
                  <p>{email}</p>
                </td>
                <td>
                  <p>{phoneNumber}</p>
                </td>
                <td>
                  <p>{createdAt}</p>
                </td>
                <td>
                  <button className="btn-active">{status}</button>
                </td>
                <td>
                  <img src={DottedIcon} alt="" />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="pagination">
        <div className="pagination-left">
          <p>Showing</p>
          <div className="pagination-btn">
            <p>100</p>
            <img src={ArrowDownIcon} alt="" />
          </div>
          <p>out of 100</p>
        </div>

        <div className="pagination-right">
          <div className="arrow-background">
            <img src={NextPrev} alt="" />
          </div>

          <p>1 2 3</p>
          <img src={DottedHorizontal} alt="" />
          <p>15 16</p>

          <div className="arrow-background">
            <img src={NextForward} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
