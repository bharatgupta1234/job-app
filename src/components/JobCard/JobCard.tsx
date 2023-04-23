import React from "react";
// @ts-ignore
import Netflix from "assets/netflix.svg";
import { Button } from "components";
import { Job } from "pages/Home/types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface Props {
  jobDetails: Job;
  onPressApplyNow(): void;
  onPressExternalApply(): void;
  containerClassName: string;
  onEdit?(): void;
  onDelete?(jobId: number): void;
}

const JobCard = ({
  jobDetails,
  onPressApplyNow,
  onPressExternalApply,
  containerClassName,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <div
      className={`flex relative items-start py-16 px-24 border border-grey rounded-lg w-830  ${containerClassName}`}
    >
      <img src={Netflix} alt="company logo " />
      <div className="ml-8 ">
        <div className="flex justify-between ">
          <span>
            <p className="text-dark">{jobDetails.title}</p>
            <p className="text-dark">{`${jobDetails.company} - ${jobDetails.industry}`}</p>
            <p className="text-placeholder">
              {`${jobDetails.location} (${jobDetails.remoteType})`}
            </p>
          </span>
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
              <Button name="Apply Now" onClick={onPressApplyNow} />
            </div>
          ) : null}
          {jobDetails.isExternalApply ? (
            <Button
              name="External Apply"
              onClick={onPressExternalApply}
              secondary
            />
          ) : null}
        </div>
      </div>
      <span className="flex absolute right-16">
        <AiFillEdit
          size={"24px"}
          onClick={onEdit}
          className="mr-16 cursor-pointer"
        />
        <AiFillDelete
          size={"24px"}
          className="cursor-pointer"
          onClick={() => onDelete && onDelete(jobDetails.id)}
        />
      </span>
    </div>
  );
};

export default JobCard;
