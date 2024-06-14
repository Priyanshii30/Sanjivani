import React, { FC, ReactNode } from 'react';

interface LinkProps {
  href: string;
  className?: string;
  target?: string;
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ href, children, className, target }) => {
  return (
    <a href={href} className={className} target={target} rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default Link;
