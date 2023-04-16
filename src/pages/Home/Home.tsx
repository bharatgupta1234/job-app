import { Button, JobCard } from "components";
import { useEffect, useState } from "react";
import { Job } from "./types";
import { getJobs } from "./api";

const Home = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    getJobs().then((data) => setJobs(data));
  }, []);

  return (
    <div className="m-32">
      <div className="flex justify-end">
        <Button onPress={() => {}} name="Create Job" />
      </div>
      <div className="flex flex-wrap my-32">
        {jobs.map((job) => (
          <JobCard
            containerClassName="mb-32"
            jobDetails={job}
            onPressApplyNow={() => {}}
            onPressExternalApply={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
