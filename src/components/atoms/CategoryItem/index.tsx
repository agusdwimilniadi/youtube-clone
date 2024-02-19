import React from 'react';

const CategoryItem = ({
  isActive,
  title,
}: {
  isActive?: boolean;
  title: string;
}) => {
  return (
    <button
      className={`${
        isActive ? 'bg-white text-black' : 'bg-[#272727] hover:bg-white/25'
      }  font-medium py-[6px] px-4 rounded-lg transition-all text-sm text-nowrap`}
    >
      {title}
    </button>
  );
};

export default CategoryItem;
