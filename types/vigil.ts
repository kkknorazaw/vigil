export type ToolCallStatus = "success" | "failed" | "running";

export type AgentStepStatus = ToolCallStatus | "queued";

export type AgentStep = {
  id: string;
  name: string;
  status: AgentStepStatus;
  duration: string;
  description: string;
};

export type ToolCall = {
  id: string;
  name: string;
  status: ToolCallStatus;
  duration: string;
  startedAt: string;
  input: Record<string, unknown>;
  output?: Record<string, unknown>;
  errorMessage?: string;
};

export type AgentRun = {
  id: string;
  chain: string;
  txHash: string;
  model: string;
  confidence: number;
  toolCalls: ToolCall[];
  steps: AgentStep[];
  startedAt: string;
  status: AgentStepStatus;
  reportId: string;
};

export type RiskSeverity = "critical" | "high" | "medium" | "low";

export type RiskReport = {
  id: string;
  targetType: "address" | "contract" | "project";
  target: string;
  title: string;
  summary: string;
  tldr: string;
  attackType: string;
  severity: RiskSeverity;
  riskScore: number;
  estimatedLoss: string;
  affectedProtocols: string[];
  rootCause: string;
  confidence: number;
  reviewStatus: "pending" | "reviewed" | "needs-human-review";
  analysis: string[];
  evidence: Array<{
    label: string;
    source: string;
    detail: string;
  }>;
  recommendations: string[];
};

export type ReviewReport = {
  reportId: string;
  reviewer: string;
  status: "pending" | "approved" | "needs-human-review";
  notes: string;
};

export type EvalCase = {
  id: string;
  title: string;
  target: string;
  type: RiskReport["targetType"];
  expectedSeverity: RiskSeverity;
  reportId: string;
};

export type EvalSummary = {
  totalCases: number;
  passedCases: number;
  averageConfidence: number;
  lastEvaluatedAt: string;
};
