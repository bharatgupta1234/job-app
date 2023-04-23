import axios from "axios";
import { Job } from "./types";

const baseUrl = "https://643c08da70ea0e66029fddfd.mockapi.io/api/v1/";

const getJobs = async (): Promise<Job[]> => {
  const response = await axios.get(baseUrl + "jobs");
  return response.data;
};

type JobWithoutId = Omit<Job, "id">;
const addJob = async (job: JobWithoutId): Promise<Job> => {
  const response = await axios.post(baseUrl + "jobs", {
    ...job,
  });
  return response.data;
};

const updateJob = async (job: Job): Promise<Job> => {
  const response = await axios.put(`${baseUrl}jobs/${job.id}`, {
    ...job,
  });
  return response.data;
};

const deleteJob = async (jobId: number): Promise<boolean> => {
  const response = await axios.delete(`${baseUrl}jobs/${jobId}`);
  return response.data;
};

export { getJobs, addJob, updateJob, deleteJob };
