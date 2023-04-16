export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  remoteType: string;
  minExp: number;
  maxExp: number;
  industry: string;
  minSalary: number;
  maxSalary: number;
  totalEmployees: number;
  isQuickApply: boolean;
  isExternalApply: boolean;
}
