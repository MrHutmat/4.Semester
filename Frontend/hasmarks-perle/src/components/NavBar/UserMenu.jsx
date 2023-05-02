import React, { useCallback, useState } from "react";
import UserItems from "./UserItems";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar"
        onClick={toggleOpen}
      >
        <div className="w-10 rounded-full">
          <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" />
        </div>
      </div>

      {isOpen && (
        <ul className="menu dropdown-content capitalize mt-4 p-2 shadow bg-neutral rounded-box w-52">
          <UserItems onClick={() => {}} label="Login" />
          <UserItems onClick={() => {}} label="Sign Up" />
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
