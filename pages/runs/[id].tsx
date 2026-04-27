import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps } from "next";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CodeBlock from "@/components/CodeBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { mockAgentRun } from "@/data/mock-agent-runs";
import { mockAddressReport } from "@/data/mock-address";

export default function RunTracePage() {
  const router = useRouter();
  const runId = typeof router.query.id === "string" ? router.query.id : mockAgentRun.id;

  return (
    <main className="page-shell">
      <Header />

      <section className="section trace-layout">
        <div className="stack">
          <div className="section-heading stack">
            <p className="eyebrow">Agent Trace</p>
            <h1>Tool Call Timeline</h1>
            <p className="mono">{runId}</p>
          </div>

          <div className="tool-timeline">
            {mockAgentRun.toolCalls.map((call) => (
              <Card className="tool-card" key={call.id}>
                <div className="tool-header">
                  <div>
                    <h3>{call.name}</h3>
                    <p>
                      <span className="mono">{call.startedAt}</span> · <span className="mono">{call.duration}</span>
                    </p>
                  </div>
                  <Badge tone={call.status}>{call.status}</Badge>
                </div>
                <CodeBlock title="input" value={call.input} />
                {call.output ? <CodeBlock title="output" value={call.output} /> : null}
                {call.errorMessage ? <p className="error-message">{call.errorMessage}</p> : null}
              </Card>
            ))}
          </div>
        </div>

        <aside className="stack">
          <Card className="summary-card sticky-card">
            <h3>Final Report Summary</h3>
            <SummaryRow label="Attack Type" value={mockAddressReport.attackType} />
            <SummaryRow label="Severity" value={mockAddressReport.severity} />
            <SummaryRow label="Estimated Loss" value={mockAddressReport.estimatedLoss} />
            <SummaryRow label="Protocol" value={mockAddressReport.affectedProtocols.join(", ")} />
            <SummaryRow label="Root Cause" value={mockAddressReport.rootCause} />
            <SummaryRow label="Confidence" value={`${mockAddressReport.confidence}`} />
            <SummaryRow label="Review Status" value={mockAddressReport.reviewStatus} />
            <div className="button-column">
              <Button href={`/reports/${mockAddressReport.id}`}>打开事件报告</Button>
              <Button variant="secondary">发送人工审核</Button>
            </div>
          </Card>
        </aside>
      </section>

      <Footer />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [{ params: { id: mockAgentRun.id } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="summary-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
