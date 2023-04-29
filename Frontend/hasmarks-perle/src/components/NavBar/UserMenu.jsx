import React, { useCallback, useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return <div className="hidden md:flex">test</div>;
};

export default UserMenu;
