import type { ReactNode } from "react";

type BadgeTone = "success" | "failed" | "running" | "queued" | "high" | "medium" | "low" | "neutral";

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
};

export default function Badge({ children, tone = "neutral" }: BadgeProps) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}
