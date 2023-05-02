import React from "react";

const UserItems = ({ onClick, label }) => {
  return <div onClick={onClick}>{label}</div>;
};

export default UserItems;
