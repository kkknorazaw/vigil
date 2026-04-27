import type { EvalCase, EvalSummary, ReviewReport, RiskReport } from "@/types/vigil";

export const mockProjectReport: RiskReport = {
  id: "mock-project",
  targetType: "project",
  target: "VigilSwap Mock",
  title: "项目级资金流与权限面复核",
  summary: "项目整体风险来自权限治理、跨链资金出口和异常入金监控缺口。",
  tldr: "Vigil 建议将项目风险评级设为 high，直到多签、出金监控和合约变更流程完成整改。",
  attackType: "Governance and Flow Exposure",
  severity: "high",
  riskScore: 78,
  estimatedLoss: "$1.2M TVL exposure",
  affectedProtocols: ["VigilSwap Mock", "Mock Bridge"],
  rootCause: "治理权限与资金出口监控没有形成闭环，异常资金可在短时间内跨链分散。",
  confidence: 0.88,
  reviewStatus: "reviewed",
  analysis: [
    "项目合约组包含 2 个可升级代理，均缺少可公开验证的 timelock。",
    "桥接出口与聚合器调用占近期大额转移的 62%，风险集中在资金离场阶段。",
    "监控规则覆盖地址标签，但缺少对权限事件和异常 outflow 的联合告警。",
  ],
  evidence: [
    {
      label: "Governance surface",
      source: "permission_graph",
      detail: "3 个关键权限由同一 signer 集合控制。",
    },
    {
      label: "Outflow concentration",
      source: "flow_stats",
      detail: "最近 7 日高额转出集中于两个桥接入口。",
    },
  ],
  recommendations: [
    "为升级、路由、treasury 变更建立统一审批和延迟执行流程。",
    "把 outflow spike、bridge exit、privileged call 合并为复合告警。",
    "在报告页保留证据链接和人工复核状态，便于审计追踪。",
  ],
};

export const mockReviewReport: ReviewReport = {
  reportId: mockProjectReport.id,
  reviewer: "Vigil Analyst Queue",
  status: "approved",
  notes: "Mock review confirms the report structure is ready for analyst handoff.",
};

export const mockEvalSummary: EvalSummary = {
  totalCases: 3,
  passedCases: 3,
  averageConfidence: 0.88,
  lastEvaluatedAt: "2026-04-27T10:00:00+08:00",
};

export const mockProjectCases: EvalCase[] = [
  {
    id: "case-project-001",
    title: "Project level governance and flow review",
    target: mockProjectReport.target,
    type: "project",
    expectedSeverity: "high",
    reportId: mockProjectReport.id,
  },
];
