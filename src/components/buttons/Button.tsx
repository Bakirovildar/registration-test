import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;