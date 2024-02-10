import NavbarCenter from '@/components/molecules/NavbarCenter';
import NavbarLeft from '@/components/molecules/NavbarLeft';
import NavbarRight from '@/components/molecules/NavbarRight';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between p-3">
      <NavbarLeft />
      <NavbarCenter />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
