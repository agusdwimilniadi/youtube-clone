import Link from 'next/link';
import React from 'react';

const ButtonItemSidebar = ({
  isActive,
  children,
  href,
}: {
  isActive?: boolean;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={`p-2 items-center gap-5  text-xs flex ${
        isActive ? 'bg-white/15 font-semibold' : 'hover:bg-white/15'
      } ms-3 me-4 rounded-lg`}
    >
      {children}
    </Link>
  );
};

export default ButtonItemSidebar;
