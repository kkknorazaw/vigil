import type { AgentRun } from "@/types/vigil";

export const mockAgentRun: AgentRun = {
  id: "run-vigil-001",
  chain: "Ethereum",
  txHash: "0xb93d6c8e0a77ed93f5464f4d00a91decb3c1ab6f8a97cb41ec6a4e11",
  model: "vigil-agent-r1",
  confidence: 0.91,
  startedAt: "2026-04-27 10:04:18",
  status: "success",
  reportId: "mock-address",
  steps: [
    {
      id: "step-1",
      name: "Normalize target",
      status: "success",
      duration: "0.4s",
      description: "识别输入类型，标准化地址和链 ID。",
    },
    {
      id: "step-2",
      name: "Fetch labels",
      status: "success",
      duration: "1.8s",
      description: "拉取公开风险标签、实体簇和 CEX / bridge 标记。",
    },
    {
      id: "step-3",
      name: "Trace fund flow",
      status: "success",
      duration: "5.6s",
      description: "向上追踪资金来源，向下追踪拆分转移路径。",
    },
    {
      id: "step-4",
      name: "Score risk pattern",
      status: "success",
      duration: "2.1s",
      description: "将路径、标签、时间密度和行为模板合并评分。",
    },
    {
      id: "step-5",
      name: "Draft report",
      status: "success",
      duration: "3.0s",
      description: "生成 TL;DR、证据来源和人工复核建议。",
    },
  ],
  toolCalls: [
    {
      id: "tool-1",
      name: "normalize_target",
      status: "success",
      duration: "0.4s",
      startedAt: "10:04:18",
      input: {
        value: "0x74f18c4b91c2d6d8f1c7d2f9bd06c93a11c9a2ef",
        chain: "ethereum",
      },
      output: {
        type: "address",
        checksum: "0x74F18C4b91C2d6D8F1c7D2F9bd06c93A11c9A2eF",
      },
    },
    {
      id: "tool-2",
      name: "label_lookup",
      status: "success",
      duration: "1.8s",
      startedAt: "10:04:19",
      input: {
        address: "0x74F18C4b91C2d6D8F1c7D2F9bd06c93A11c9A2eF",
      },
      output: {
        labels: ["new-wallet", "phishing-adjacent", "bridge-exit"],
        clusterOverlap: 3,
      },
    },
    {
      id: "tool-3",
      name: "trace_transactions",
      status: "success",
      duration: "5.6s",
      startedAt: "10:04:21",
      input: {
        depth: 7,
        direction: "both",
      },
      output: {
        inbound: 11,
        outbound: 6,
        highestRiskPath: "0xb93d...4e11 -> 0x74f1...a2ef -> bridge",
      },
    },
    {
      id: "tool-4",
      name: "contract_context",
      status: "failed",
      duration: "0.9s",
      startedAt: "10:04:27",
      input: {
        contracts: ["0x0f2192ac88ca4f13893f79c8e2a2f6ed4d1188ca"],
      },
      errorMessage: "ABI source unavailable for one peripheral contract.",
    },
    {
      id: "tool-5",
      name: "report_writer",
      status: "running",
      duration: "3.0s",
      startedAt: "10:04:28",
      input: {
        template: "risk-report-v1",
        language: "zh-CN",
      },
      output: {
        sections: ["summary", "evidence", "recommendations"],
      },
    },
  ],
};

export const mockAgentRuns: AgentRun[] = [mockAgentRun];
