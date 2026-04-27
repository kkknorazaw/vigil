import Card from "./Card";
import Badge from "./Badge";

type FlowCardProps = {
  step?: string;
  title: string;
  body: string;
  meta?: string;
  status?: "success" | "failed" | "running" | "queued" | "high" | "medium" | "low";
};

export default function FlowCard({ step, title, body, meta, status }: FlowCardProps) {
  return (
    <Card className="flow-card" as="article">
      <div className="flow-card-header">
        {step ? <span className="mono flow-index">{step}</span> : null}
        {status ? <Badge tone={status}>{status}</Badge> : null}
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      {meta ? <span className="mono flow-meta">{meta}</span> : null}
    </Card>
  );
}
