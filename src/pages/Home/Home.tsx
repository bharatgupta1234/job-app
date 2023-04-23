import { Button, JobCard } from "components";
import { useCallback, useRef, useState } from "react";
import { CreateJobSteps } from "./types";
import { Step1Modal, Step2Modal } from "./components";
import { Data as Step1Data } from "./components/Step1Modal";
import { Data as Step2Data } from "./components/Step2Modal";
import { addJob } from "./api";
import useJobs from "./hooks/useJobs";

const Home = () => {
  const { jobs, fetchJobs } = useJobs();
  const [step, setStep] = useState<CreateJobSteps>();

  const step1Data = useRef<Step1Data>();

  const handleCreateJob = useCallback(() => {
    setStep(CreateJobSteps.Step1);
  }, []);

  const handleStep1Complete = useCallback((data: Step1Data) => {
    step1Data.current = data;
    setStep(CreateJobSteps.Step2);
  }, []);

  const handleStep2Complete = useCallback(
    async (data: Step2Data) => {
      setStep(undefined);
      // create job api call
      if (step1Data.current) {
        await addJob({
          ...step1Data.current,
          ...data,
        });
      }
      // make api call
      await fetchJobs();
    },
    [fetchJobs]
  );

  const handleStepClose = useCallback(() => {
    setStep(undefined);
  }, []);

  return (
    <div className="m-32">
      <div className="flex justify-end">
        <Button onClick={handleCreateJob} name="Create Job" />
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
      <Step1Modal
        visible={step === CreateJobSteps.Step1}
        onPrimaryCtaPress={handleStep1Complete}
        onModalClose={handleStepClose}
      />
      <Step2Modal
        visible={step === CreateJobSteps.Step2}
        onPrimaryCtaPress={handleStep2Complete}
        onModalClose={handleStepClose}
      />
    </div>
  );
};

export default Home;
