import React from 'react';

interface IButtonFlat extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const ButtonFlat = ({ children, ...props }: IButtonFlat) => {
  return (
    <button
      {...props}
      className="bg-white/20 hover:bg-white/50 flex items-center gap-2 py-2 px-4 rounded-full text-[12px] font-medium"
    >
      {children}
    </button>
  );
};

export default ButtonFlat;
