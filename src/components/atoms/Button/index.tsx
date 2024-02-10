interface IButton {
  children: React.ReactNode;
  variant?: 'transparent' | 'white' | 'gray' | 'blue';
}
const Button = ({ children }: IButton) => {
  return (
    <button className="border border-white/20 flex items-center px-3 py-1 text-sm font-semibold text-blue-400 rounded-full gap-2 hover:bg-blue-400/50 hover:border-transparent">
      {children}
    </button>
  );
};

export default Button;
