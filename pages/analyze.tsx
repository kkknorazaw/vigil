import { useState } from "react";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { mockAgentRun } from "@/data/mock-agent-runs";
import { mockAddressReport } from "@/data/mock-address";

export default function AnalyzePage() {
  const [hasRun, setHasRun] = useState(false);

  return (
    <main className="page-shell">
      <Header />

      <section className="section stack">
        <div className="section-heading stack">
          <p className="eyebrow">Analyze</p>
          <h1>启动一次 mock Agent 分析。</h1>
          <p>输入钱包地址、合约地址或项目名称，点击按钮后展示模拟 Agent 流程与报告预览。</p>
        </div>

        <Card className="analyze-input-card">
          <Input
            id="analysis-target"
            label="分析目标"
            placeholder="0x74f18c4b91c2d6d8f1c7d2f9bd06c93a11c9a2ef"
            defaultValue="0x74f18c4b91c2d6d8f1c7d2f9bd06c93a11c9a2ef"
          />
          <Button onClick={() => setHasRun(true)}>开始分析</Button>
        </Card>
      </section>

      {hasRun ? (
        <section className="section analyze-layout">
          <div className="stack">
            <div className="section-heading stack">
              <p className="eyebrow">Agent Steps</p>
              <h2>Agent 流程显示</h2>
            </div>
            <div className="agent-step-list">
              {mockAgentRun.steps.map((step) => (
                <Card className="agent-step-card" key={step.id}>
                  <div className="agent-step-header">
                    <h3>{step.name}</h3>
                    <Badge tone={step.status}>{step.status}</Badge>
                  </div>
                  <p>{step.description}</p>
                  <code>{step.duration}</code>
                </Card>
              ))}
            </div>
          </div>

          <aside className="stack">
            <Card className="summary-card">
              <h3>Agent Run Summary</h3>
              <SummaryRow label="Run ID" value={mockAgentRun.id} />
              <SummaryRow label="Chain" value={mockAgentRun.chain} />
              <SummaryRow label="Tx Hash" value={mockAgentRun.txHash} mono />
              <SummaryRow label="Model" value={mockAgentRun.model} />
              <SummaryRow label="Confidence" value={`${mockAgentRun.confidence}`} />
              <SummaryRow label="Tool Calls" value={`${mockAgentRun.toolCalls.length}`} />
              <SummaryRow label="Started At" value={mockAgentRun.startedAt} />
              <SummaryRow label="Status" value={mockAgentRun.status} />
            </Card>

            <Card className="report-preview-card">
              <div className="agent-step-header">
                <h3>{mockAddressReport.title}</h3>
                <Badge tone="high">{mockAddressReport.severity}</Badge>
              </div>
              <p>{mockAddressReport.tldr}</p>
              <div className="badge-row">
                <Badge tone="neutral">{mockAddressReport.attackType}</Badge>
                <Badge tone="high">loss {mockAddressReport.estimatedLoss}</Badge>
              </div>
              <SummaryRow label="受影响协议" value={mockAddressReport.affectedProtocols.join(", ")} />
              <div className="button-row">
                <Button href={`/reports/${mockAddressReport.id}`}>查看完整报告</Button>
                <Button href={`/runs/${mockAgentRun.id}`} variant="secondary">
                  查看 Trace
                </Button>
              </div>
            </Card>
          </aside>
        </section>
      ) : null}

      <Footer />
    </main>
  );
}

function SummaryRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="summary-row">
      <span>{label}</span>
      <strong className={mono ? "mono" : undefined}>{value}</strong>
    </div>
  );
}
