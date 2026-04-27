import { mockAddressReport } from "./mock-address";
import { mockContractReport } from "./mock-contract";
import { mockProjectReport } from "./mock-project";

export const reports = [mockAddressReport, mockContractReport, mockProjectReport];

export function getReportById(id?: string) {
  return reports.find((report) => report.id === id) ?? mockAddressReport;
}
