import Badge from "@/components/Badge";
import Block from "@/components/Block";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ExampleCard from "@/components/ExampleCard";
import FlowCard from "@/components/FlowCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import StatCard from "@/components/StatCard";
import { reports } from "@/data/reports";
import { mockEvalSummary } from "@/data/mock-project";

const heroChips = ["0x74f1...a2ef", "tx 0xb93d...4e11", "VigilSwap Mock"];

const flowSteps = [
  {
    step: "01",
    title: "识别目标类型",
    body: "解析钱包地址、合约地址、交易 hash 或项目名称，并绑定链与上下文。",
    meta: "target.normalized",
  },
  {
    step: "02",
    title: "收集链上证据",
    body: "拉取标签、交易、调用、资金路径和权限信息，形成可复查证据集合。",
    meta: "evidence.collected",
  },
  {
    step: "03",
    title: "构建风险图谱",
    body: "把地址、合约、协议和时间线放入同一调查视图，定位关键节点。",
    meta: "graph.mapped",
  },
  {
    step: "04",
    title: "推理攻击模式",
    body: "用 mock Agent 判断钓鱼归集、权限风险、跨链出金等常见模式。",
    meta: "risk.scored",
  },
  {
    step: "05",
    title: "生成可审报告",
    body: "输出摘要、证据来源、建议动作和 Trace，方便安全团队复核。",
    meta: "report.ready",
  },
];

const analysisBlocks = [
  {
    title: "钱包地址",
    body: "识别资金来源、历史交互、关联簇、风险标签和异常入出金节奏。",
    meta: "address / entity / cluster",
  },
  {
    title: "合约地址",
    body: "检查 owner 权限、升级代理、外部调用、事件覆盖和潜在资金路径。",
    meta: "contract / proxy / abi",
  },
  {
    title: "项目名称",
    body: "把项目合约组、资金出口和治理权限组合成项目级风险视图。",
    meta: "project / protocol / ops",
  },
];

const capabilities = [
  ["证据优先", "所有判断回到具体交易、标签、调用或 Trace 输出，降低黑盒评分风险。"],
  ["高密度报告", "面向安全团队的摘要、证据、建议和复核状态一屏展开。"],
  ["Agent Trace", "保留工具调用输入输出，方便定位失败步骤和模型推理来源。"],
  ["Mock 到真实 API", "组件和类型已按真实数据流拆分，后续可替换 mock 数据层。"],
];

export default function Home() {
  return (
    <main className="page-shell">
      <Header />

      <section className="section hero-section">
        <div className="hero-copy stack">
          <Badge tone="neutral">Vigil Frontend MVP</Badge>
          <h1>面向链上安全分析的 AI Agent 工作台。</h1>
          <p>
            输入钱包、合约、交易或项目名称，Vigil 将模拟 Agent 调查过程，生成风险报告、证据链和工具调用 Trace。
          </p>
          <div className="hero-actions">
            <Button href="/analyze">立即开始分析</Button>
            <Button href="/examples" variant="secondary">
              查看示例
            </Button>
          </div>
        </div>
        <Card className="hero-input-card">
          <Input id="hero-target" label="分析目标" placeholder="输入钱包地址 / 合约地址 / 项目名称" />
          <Button href="/analyze">开始分析</Button>
          <div className="chip-list">
            {heroChips.map((chip) => (
              <span className="chip mono" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </Card>
      </section>

      <section className="section stack">
        <SectionHeading eyebrow="Agent Workflow" title="Agent 如何工作" />
        <div className="flow-list">
          {flowSteps.map((step) => (
            <FlowCard key={step.step} {...step} />
          ))}
        </div>
      </section>

      <section className="section stack">
        <SectionHeading eyebrow="Scope" title="我们能分析什么" />
        <div className="block-list">
          {analysisBlocks.map((block) => (
            <Block key={block.title} title={block.title} meta={block.meta}>
              <p>{block.body}</p>
            </Block>
          ))}
        </div>
      </section>

      <section className="section stack">
        <SectionHeading eyebrow="Examples" title="热门示例" />
        <div className="card-grid">
          {reports.map((report) => (
            <ExampleCard
              key={report.id}
              title={report.title}
              address={report.target}
              summary={report.tldr}
              tag={report.targetType}
              severity={report.severity}
              href={`/reports/${report.id}`}
            />
          ))}
        </div>
      </section>

      <section className="section stack">
        <SectionHeading eyebrow="Capabilities" title="核心能力" />
        <div className="card-grid">
          {capabilities.map(([title, body]) => (
            <Card className="capability-card" as="article" key={title}>
              <span className="card-rule" />
              <h3>{title}</h3>
              <p>{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section stack">
        <SectionHeading eyebrow="Trust Basis" title="可信的分析基础" />
        <div className="stat-grid">
          <StatCard value="3" label="Mock 报告类型" detail="address / contract / project" />
          <StatCard value="5" label="Agent 流程步骤" detail="normalize -> report" />
          <StatCard value={`${mockEvalSummary.averageConfidence}`} label="平均置信度" detail="mock eval summary" />
        </div>
      </section>

      <section className="section cta-section stack">
        <Badge tone="high">MVP Ready</Badge>
        <h2>从一个地址开始，查看完整调查链路。</h2>
        <p>分析页会展示 mock Agent 流程、报告预览和 Trace 入口，适合作为真实后端接入前的前端基线。</p>
        <Button href="/analyze">打开分析工作台</Button>
      </section>

      <Footer />
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading stack">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
