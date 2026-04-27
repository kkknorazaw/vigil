import type { EvalCase, RiskReport } from "@/types/vigil";

export const mockContractReport: RiskReport = {
  id: "mock-contract",
  targetType: "contract",
  target: "0x0f2192ac88ca4f13893f79c8e2a2f6ed4d1188ca",
  title: "可升级合约权限风险报告",
  summary: "合约暴露 owner-only 升级路径，并允许管理员替换关键路由地址。",
  tldr: "该合约当前未发现直接攻击交易，但权限集中度过高，升级入口与资金路由需上线前整改。",
  attackType: "Privileged Upgrade Risk",
  severity: "medium",
  riskScore: 64,
  estimatedLoss: "Protocol TVL at risk",
  affectedProtocols: ["VigilSwap Mock"],
  rootCause: "Proxy admin 与 treasury signer 由同一 EOA 控制，缺少 timelock 和多签约束。",
  confidence: 0.84,
  reviewStatus: "pending",
  analysis: [
    "实现合约可以被 proxy admin 替换，未观察到 timelock 调用约束。",
    "管理员可更新 feeCollector 和 routeManager，影响资金路径与费用接收。",
    "事件日志没有为关键权限变更提供足够可索引字段。",
  ],
  evidence: [
    {
      label: "Proxy admin",
      source: "contract_storage",
      detail: "EIP-1967 admin slot 指向单一 EOA。",
    },
    {
      label: "Mutable router",
      source: "abi_scan",
      detail: "setRouteManager(address) 可由 owner 调用并立即生效。",
    },
  ],
  recommendations: [
    "将 proxy admin 迁移至多签，并增加 24 小时 timelock。",
    "为 routeManager 更新增加事件字段与链上监控。",
    "上线前冻结 owner 权限或发布权限变更说明。",
  ],
};

export const mockContractCases: EvalCase[] = [
  {
    id: "case-contract-001",
    title: "Upgradeable proxy permission review",
    target: mockContractReport.target,
    type: "contract",
    expectedSeverity: "medium",
    reportId: mockContractReport.id,
  },
];
