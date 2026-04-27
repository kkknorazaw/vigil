import type { EvalCase, RiskReport } from "@/types/vigil";

export const mockAddressReport: RiskReport = {
  id: "mock-address",
  targetType: "address",
  target: "0x74f18c4b91c2d6d8f1c7d2f9bd06c93a11c9a2ef",
  title: "高风险资金归集地址分析",
  summary: "该地址与多个 phishing cluster 存在二跳资金关联，并在短时间内完成多笔拆分转移。",
  tldr: "Vigil 判断该地址大概率参与钓鱼资金归集，建议冻结关联入金路径并人工复核 3 笔关键交易。",
  attackType: "Phishing Fund Consolidation",
  severity: "high",
  riskScore: 86,
  estimatedLoss: "$482,000",
  affectedProtocols: ["Uniswap", "Curve", "Unknown Bridge"],
  rootCause: "资金路径与已标记钓鱼地址簇高度重合，且转移节奏符合洗钱分层模式。",
  confidence: 0.91,
  reviewStatus: "needs-human-review",
  analysis: [
    "目标地址在 27 分钟内收到来自 11 个新建地址的汇入，资金来源高度集中。",
    "二跳路径触达已公开标记的 phishing cluster，且后续通过聚合器进行拆分。",
    "未观察到正常 DeFi 使用行为，交互模式更接近资金归集与出金准备。",
  ],
  evidence: [
    {
      label: "Cluster overlap",
      source: "address_labels",
      detail: "3 个上游地址与已标记 phishing cluster 存在共同入金源。",
    },
    {
      label: "Transaction timing",
      source: "tx_trace",
      detail: "11 笔入金集中发生于 UTC 2026-04-26 09:11 至 09:38。",
    },
    {
      label: "Exit behavior",
      source: "flow_graph",
      detail: "资金随后被拆分为 6 笔，并转向桥接入口和 CEX 热钱包。",
    },
  ],
  recommendations: [
    "优先人工复核 0xb93d...4e11 与 0x0f21...88ca 两条路径。",
    "将上游 11 个新建地址加入临时监控列表。",
    "对受影响协议的入金事件建立 24 小时观察窗口。",
  ],
};

export const mockAddressCases: EvalCase[] = [
  {
    id: "case-address-001",
    title: "Phishing cluster fund consolidation",
    target: mockAddressReport.target,
    type: "address",
    expectedSeverity: "high",
    reportId: mockAddressReport.id,
  },
];
