import {
  Button,
  JobCard,
  CreateEditFlow,
  FlowHandle,
  FlowMode,
} from "components";
import { useCallback, useRef } from "react";
import { JobWithoutId } from "./types";
import { addJob, deleteJob } from "./api";
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

  return (
    <div className="m-32">
      <div className="flex justify-end">
        <Button onClick={ref.current?.start} name="Create Job" />
      </div>
      <div className="flex flex-wrap my-32">
        {jobs.map((job) => (
          <JobCard
            containerClassName="mb-32 mr-16"
            jobDetails={job}
            onPressApplyNow={() => {}}
            onPressExternalApply={() => {}}
            onEdit={() => {}}
            onDelete={handleDeleteJob}
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
