import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const ButtonSidebar = () => {
  return (
    <button className="hover:bg-white/15 z-10 p-2 rounded-full">
      <RxHamburgerMenu size={20} />
    </button>
  );
};

export default ButtonSidebar;
