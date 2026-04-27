import Card from "./Card";

type StatCardProps = {
  value: string;
  label: string;
  detail: string;
};

export default function StatCard({ value, label, detail }: StatCardProps) {
  return (
    <Card className="stat-card" as="article">
      <strong className="mono">{value}</strong>
      <span>{label}</span>
      <code>{detail}</code>
    </Card>
  );
}
