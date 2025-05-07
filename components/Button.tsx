import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const base = 'uppercase font-semibold tracking-wide rounded shadow inline-block transition';
  const variants = {
    primary: 'bg-primary text-white hover:bg-accent hover:text-primary',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };
  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
