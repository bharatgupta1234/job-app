import { useCallback, useEffect, useState } from "react";
import { Job } from "../types";
import { getJobs } from "../api";

function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchJobs = useCallback(async () => {
    getJobs().then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return { fetchJobs, jobs };
}

export default useJobs;
