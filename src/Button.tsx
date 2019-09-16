import React from 'react';

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
};

export const Button = ({ onClick, text }: ButtonProps) => (
  <button className="button" onClick={onClick}>
    {text}
  </button>
);
