import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  disabled?: boolean;
};

function classes(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  onClick,
  type = "button",
  target,
  rel,
  disabled,
}: ButtonProps) {
  const buttonClass = classes("button", `button-${variant}`, className);

  if (href) {
    return (
      <a className={buttonClass} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
