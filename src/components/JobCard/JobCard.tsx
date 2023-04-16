import React from "react";
// @ts-ignore
import Netflix from "assets/netflix.svg";
import { Button } from "components";
import { Job } from "pages/Home/types";

interface Props {
  jobDetails: Job;
  onPressApplyNow(): void;
  onPressExternalApply(): void;
  containerClassName: string;
}

const JobCard = ({
  jobDetails,
  onPressApplyNow,
  onPressExternalApply,
  containerClassName,
}: Props) => {
  return (
    <div
      className={`flex items-start py-16 px-24 border border-grey rounded-lg w-830 ${containerClassName}`}
    >
      <img src={Netflix} alt="company logo" />
      <div className="ml-8">
        <div>
          <p className="text-dark">{jobDetails.title}</p>
          <p className="text-dark">{`${jobDetails.company} - ${jobDetails.industry}`}</p>
          <p className="text-placeholder">
            {`${jobDetails.location} (${jobDetails.remoteType})`}
          </p>
        </div>
        <div className="my-24">
          <p className="text-dark">Part-Time (9.00 am - 5.00 pm IST)</p>
          <p className="text-dark mt-8">
            Experience {`(${jobDetails.minExp} - ${jobDetails.maxExp} years)`}
          </p>
          <p className="text-dark mt-8">{`INR (₹) ${jobDetails.minSalary} - ${jobDetails.maxSalary} / Month`}</p>
          <p className="text-dark mt-8">{`${jobDetails.totalEmployees} employees`}</p>
        </div>
        <div className="flex justify-between">
          {jobDetails.isQuickApply ? (
            <div className="mr-8">
              <Button name="Apply Now" onPress={onPressApplyNow} />
            </div>
          ) : null}
          {jobDetails.isExternalApply ? (
            <Button name="External Apply" onPress={onPressExternalApply} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
