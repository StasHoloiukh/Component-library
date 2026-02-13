import { useEffect, useState } from "react";
import "./Toast.css";

interface ToastProps {
  message: string;
  duration?: number;
  type?: "success" | "error" | "info";
  onClose?: () => void;
}

export const Toast = ({ message, duration = 3000, type = "info", onClose }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`toast toast-${type}`}>
      {message}
      <button className="toast-button" onClick={() => { setVisible(false); onClose?.(); }}>
        ✖
      </button>
    </div>
  );
};
