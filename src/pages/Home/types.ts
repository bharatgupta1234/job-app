export interface Job {
  id: number;
  title: string;
  company: string;
  location?: string;
  remoteType?: string;
  minExp?: string;
  maxExp?: string;
  industry: string;
  minSalary?: string;
  maxSalary?: string;
  totalEmployees?: string;
  isQuickApply: boolean;
  isExternalApply: boolean;
}

export enum CreateJobSteps {
  Step1 = "Step1",
  Step2 = "Step2",
}
