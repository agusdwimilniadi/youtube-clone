import NavbarCenter from '@/components/molecules/NavbarCenter';
import NavbarLeft from '@/components/molecules/NavbarLeft';
import NavbarRight from '@/components/molecules/NavbarRight';
import React from 'react';

const Navbar = ({ onClikNavbar }: { onClikNavbar: () => void }) => {
  return (
    <div className="flex bg-black z-50 justify-between p-3 sticky top-0 h-[10vh]">
      <NavbarLeft onClikNavbar={onClikNavbar} />
      <NavbarCenter />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
