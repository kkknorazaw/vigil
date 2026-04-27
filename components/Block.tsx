import type { ReactNode } from "react";
import Card from "./Card";

type BlockProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  meta?: string;
};

export default function Block({ eyebrow, title, children, meta }: BlockProps) {
  return (
    <Card className="block-card" as="article">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h3>{title}</h3>
      <div className="block-body">{children}</div>
      {meta ? <code>{meta}</code> : null}
    </Card>
  );
}
