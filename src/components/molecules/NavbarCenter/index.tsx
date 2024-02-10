import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

const NavbarCenter = () => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Telusuri"
        className="bg-[#121212] border border-white/10 focus:border-blue-500 placeholder:text-white/30 py-2 px-4 rounded-l-full outline-none w-[35vw]"
      />
      <button className="bg-yt-gray  px-5 border border-y-white/10 border-e-white/10 border-s-transparent rounded-e-full">
        <IoSearchOutline size={18} />
      </button>
      <button className="p-3 ms-5 rounded-full bg-white/20">
        <FaMicrophone />
      </button>
    </div>
  );
};

export default NavbarCenter;
