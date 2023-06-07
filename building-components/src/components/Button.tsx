import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "danger" | "warning" | "light";
  onClick?: () => void;
}

const Button = ({
  variant = "primary",
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
