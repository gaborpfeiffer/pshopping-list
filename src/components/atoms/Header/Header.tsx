import { ReactNode } from 'react';

type HeaderProps = {
  children?: ReactNode;
};

export const Header = ({ children }: HeaderProps) => (
  <nav className="flex justify-between bg-white px-5 py-3 shadow-md">
    {children}
  </nav>
);
