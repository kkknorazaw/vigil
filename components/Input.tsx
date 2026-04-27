import type { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, hint, id, className, ...props }: InputProps) {
  return (
    <label className={["input-shell", className].filter(Boolean).join(" ")} htmlFor={id}>
      {label ? <span>{label}</span> : null}
      <input id={id} {...props} />
      {hint ? <small>{hint}</small> : null}
    </label>
  );
}
