import React from "react";
import { Link } from "react-router-dom";

const UserItems = () => {
  return (
    <div className="flex flex-col mt-3">
      <Link to={"/login"}>
        Login
      </Link>
      <Link to={"/register"}>
        Registre
      </Link>
    </div>
  )
};

export default UserItems;
