import { useState } from "react";
import "./Input.css";

interface InputProps {
  type?: "text" | "password" | "number";
  clearable?: boolean;
  placeholder?: string;
}

export function Input({ type = "text", clearable = false, placeholder }: InputProps) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={type === "password" && show ? "text" : type}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        className="input-field"
      />
      {type === "password" && (
        <button
          onClick={() => setShow(!show)}
          className="input-button"
          style={{ right: clearable ? 25 : 5 }}
        >
          {show ? "🙈" : "👁️"}
        </button>
      )}
      {clearable && value && (
        <button
          onClick={() => setValue("")}
          className="input-button"
          style={{ right: 5 }}
        >
          ✖
        </button>
      )}
    </div>
  );
}
