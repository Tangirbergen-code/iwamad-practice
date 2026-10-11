import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button type={props.type || "button"} className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}