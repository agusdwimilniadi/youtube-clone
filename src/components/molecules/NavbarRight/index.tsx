import Button from '@/components/atoms/Button';
import React from 'react';
import { IoMdMore } from 'react-icons/io';
import { PiUserCircleLight } from 'react-icons/pi';

const NavbarRight = () => {
  return (
    <div className="flex gap-3 items-center">
      <IoMdMore size={20} />
      <Button>
        <PiUserCircleLight size={30} />
        Sign In
      </Button>
    </div>
  );
};

export default NavbarRight;
