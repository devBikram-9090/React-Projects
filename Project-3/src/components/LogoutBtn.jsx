import React from "react";

const LogoutBtn = ({ onLogout }) => {
  const HandleLogout = () => {
    onLogout();
  };
  return <button onClick={HandleLogout}>Logout</button>;
};

export default LogoutBtn;
