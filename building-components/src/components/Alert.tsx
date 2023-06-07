import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button className="btn-close" onClick={onClose} />
    </div>
  );
};

export default Alert;
