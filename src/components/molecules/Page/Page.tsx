import { FC, PropsWithChildren, ReactNode } from 'react';

type PageProps = {
  children?: ReactNode;
};

export const Page: FC<PropsWithChildren<PageProps>> = ({ children }) => (
  <div className="h-screen bg-gray-100 font-sans">{children}</div>
);
