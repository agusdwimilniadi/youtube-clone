import React from 'react';

const SidebarItemLayout = ({
  children,
  title,
  isNotHaveTitle,
}: {
  children: React.ReactNode;
  title?: string;
  isNotHaveTitle?: boolean;
}) => {
  return (
    <div className={`${isNotHaveTitle ? 'flex flex-col gap-1' : null}`}>
      {isNotHaveTitle ? null : (
        <p className={`mx-5 font-semibold text-sm mb-2`}>{title}</p>
      )}

      {children}
      <div className="h-px bg-white/15 mx-3 mt-3"></div>
    </div>
  );
};

export default SidebarItemLayout;
