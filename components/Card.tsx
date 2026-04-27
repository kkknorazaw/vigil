import type { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "section";
} & HTMLAttributes<HTMLDivElement>;

export default function Card({ children, className, as = "div", ...props }: CardProps) {
  const Component = as;

  return (
    <Component className={["card", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Component>
  );
}
