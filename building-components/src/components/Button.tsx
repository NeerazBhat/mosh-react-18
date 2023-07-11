import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "light"
    | "success";
  onClick?: () => void;
  type?: "reset" | "submit";
}

const Button = ({
  variant = "primary",
  children,
  className,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
