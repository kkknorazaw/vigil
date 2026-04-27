import ExampleCard from "@/components/ExampleCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { reports } from "@/data/reports";

export default function ExamplesPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="section stack">
        <div className="section-heading stack">
          <p className="eyebrow">Examples</p>
          <h1>示例地址、合约与项目。</h1>
          <p>点击任一示例进入 mock 报告，查看 Vigil 的报告结构和信息密度。</p>
        </div>
        <div className="card-grid">
          {reports.map((report) => (
            <ExampleCard
              key={report.id}
              title={report.title}
              address={report.target}
              summary={report.summary}
              tag={report.targetType}
              severity={report.severity}
              href={`/reports/${report.id}`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
