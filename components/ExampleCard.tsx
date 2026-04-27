import Card from "./Card";
import Button from "./Button";

type ExampleCardProps = {
  title: string;
  address: string;
  summary: string;
  tag: string;
  href?: string;
  severity?: string;
};

export default function ExampleCard({
  title,
  address,
  summary,
  tag,
  href = "/reports/mock-address",
  severity,
}: ExampleCardProps) {
  return (
    <Card className="example-card" as="article">
      <div className="example-topline">
        <span>{tag}</span>
        <code>{address}</code>
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      {severity ? <span className="example-severity mono">{severity}</span> : null}
      <Button href={href} variant="secondary" className="example-link">
        查看 mock 报告
      </Button>
    </Card>
  );
}
