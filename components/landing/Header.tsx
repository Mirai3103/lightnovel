import React from 'react';
import Logo from '../Logo';

interface HeaderProps {
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={`bg-transparent flex justify-between ${className}`}>
      <Logo />
      <div className="grid grid-cols-4 gap-x-12 justify-end items-end text-3xl text-white mr-36">
        <div>Discover</div>
        <div>Sign up</div>
        <div>About</div>
        <div>FAQ</div>
      </div>
    </div>
  );
};

export default Header;
