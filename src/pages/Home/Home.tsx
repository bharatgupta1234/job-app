import {
  Button,
  JobCard,
  CreateEditFlow,
  FlowHandle,
  FlowMode,
} from "components";
import { useCallback, useRef } from "react";
import { Job, JobWithoutId } from "./types";
import { addJob, deleteJob, updateJob } from "./api";
import useJobs from "./hooks/useJobs";

const Home = () => {
  const { jobs, fetchJobs } = useJobs();
  const ref = useRef<FlowHandle>(null);

  const handleCreateFlowComplete = useCallback(
    async (data: JobWithoutId) => {
      // create job api call
      await addJob(data);
      // make api call
      await fetchJobs();
    },
    [fetchJobs]
  );
  const handleDeleteJob = useCallback(
    async (jobId: number) => {
      await deleteJob(jobId);
      await fetchJobs();
    },
    [fetchJobs]
  );

  const handleEditJob = useCallback(
    async (job: Job) => {
      await updateJob(job);
      await fetchJobs();
    },
    [fetchJobs]
  );

  return (
    <div className="m-32">
      <div className="flex justify-end">
        <Button onClick={ref.current?.start} name="Create Job" />
      </div>
      <div className="flex flex-wrap my-32">
        {jobs.map((job) => (
          <JobCard
            containerClassName="mb-32 mr-32"
            jobDetails={job}
            onDelete={handleDeleteJob}
            handleEditJob={handleEditJob}
          />
        ))}
      </div>
      <CreateEditFlow
        ref={ref}
        onFlowComplete={handleCreateFlowComplete}
        mode={FlowMode.CREATE}
      />
    </div>
  );
};

export default Home;
