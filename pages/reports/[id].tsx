import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps } from "next";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getReportById, reports } from "@/data/reports";

export default function ReportPage() {
  const router = useRouter();
  const report = getReportById(typeof router.query.id === "string" ? router.query.id : undefined);

  return (
    <main className="page-shell">
      <Header />

      <section className="section report-layout">
        <div className="stack">
          <div className="section-heading stack">
            <p className="eyebrow">Risk Report</p>
            <h1>{report.title}</h1>
            <p>{report.summary}</p>
          </div>

          <Card className="report-section">
            <h2>Summary</h2>
            <p>{report.tldr}</p>
            <div className="badge-row">
              <Badge tone={report.severity === "critical" || report.severity === "high" ? "high" : "medium"}>
                {report.severity}
              </Badge>
              <Badge tone="neutral">{report.attackType}</Badge>
              <Badge tone="neutral">{report.targetType}</Badge>
            </div>
          </Card>

          <Card className="report-section">
            <h2>文字分析</h2>
            <div className="ordered-stack">
              {report.analysis.map((item, index) => (
                <p key={item}>
                  <span className="mono list-index">{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </p>
              ))}
            </div>
          </Card>

          <Card className="report-section">
            <h2>证据来源</h2>
            <div className="evidence-list">
              {report.evidence.map((item) => (
                <Card className="evidence-card" key={item.label}>
                  <div className="agent-step-header">
                    <h3>{item.label}</h3>
                    <code>{item.source}</code>
                  </div>
                  <p>{item.detail}</p>
                </Card>
              ))}
            </div>
          </Card>

          <Card className="report-section">
            <h2>建议</h2>
            <div className="ordered-stack">
              {report.recommendations.map((item, index) => (
                <p key={item}>
                  <span className="mono list-index">{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </p>
              ))}
            </div>
          </Card>
        </div>

        <aside className="stack">
          <Card className="summary-card sticky-card">
            <h3>Report Index</h3>
            <SummaryRow label="Target" value={report.target} mono />
            <SummaryRow label="Risk Score" value={`${report.riskScore}`} />
            <SummaryRow label="Estimated Loss" value={report.estimatedLoss} />
            <SummaryRow label="Confidence" value={`${report.confidence}`} />
            <SummaryRow label="Review Status" value={report.reviewStatus} />
            <SummaryRow label="Root Cause" value={report.rootCause} />
            <Button href="/runs/run-vigil-001" variant="secondary">
              查看 Trace
            </Button>
          </Card>
        </aside>
      </section>

      <Footer />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: reports.map((report) => ({
    params: { id: report.id },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});

function SummaryRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="summary-row">
      <span>{label}</span>
      <strong className={mono ? "mono" : undefined}>{value}</strong>
    </div>
  );
}
