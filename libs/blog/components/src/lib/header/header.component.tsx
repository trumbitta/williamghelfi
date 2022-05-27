import { ReactNode } from 'react';

export const Header = ({ children }: { children: ReactNode }) => (
  <header>
    <h1 className="text-2xl">{children}</h1>
  </header>
);
