import Link from 'next/link';
import React from 'react';
import { CiStreamOn } from 'react-icons/ci';

const ButtonItemSidebar = ({
  isActive,
  children,
  href,
  isLive,
}: {
  isActive?: boolean;
  children: React.ReactNode;
  href: string;
  isLive?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`p-2 items-center gap-5 justify-between text-sm flex  ${
        isActive ? 'bg-white/15 font-semibold' : 'hover:bg-white/15'
      } ms-3 me-4 rounded-lg`}
    >
      <span className="flex items-center line-clamp-1 gap-6">{children}</span>
      {isLive ? <CiStreamOn size={15} color="red" /> : null}
    </Link>
  );
};

export default ButtonItemSidebar;
