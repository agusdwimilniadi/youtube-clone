import ButtonSidebar from '@/components/atoms/ButtonSidebar';
import IconYoutube from '@/components/atoms/IconYoutube';
import Image from 'next/image';
import React from 'react';
import { ImYoutube2 } from 'react-icons/im';

const NavbarLeft = ({ onClikNavbar }: { onClikNavbar: () => void }) => {
  return (
    <div className="flex items-center gap-2">
      <ButtonSidebar onClikNavbar={onClikNavbar} />
      <IconYoutube />
    </div>
  );
};

export default NavbarLeft;
