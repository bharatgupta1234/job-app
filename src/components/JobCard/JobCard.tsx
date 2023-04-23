import React, { useCallback, useRef } from "react";
// @ts-ignore
import Netflix from "assets/netflix.svg";
import { Button, CreateEditFlow, FlowHandle, FlowMode } from "components";
import { Job, JobWithoutId } from "pages/Home/types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface Props {
  jobDetails: Job;
  onPressApplyNow?(): void;
  onPressExternalApply?(): void;
  containerClassName: string;
  onEdit?(): void;
  onDelete?(jobId: number): void;
  handleEditJob(data: Job): Promise<void>;
}

const JobCard = ({
  jobDetails,
  onPressApplyNow,
  onPressExternalApply,
  containerClassName,
  onEdit,
  onDelete,
  handleEditJob,
}: Props) => {
  const editFlowRef = useRef<FlowHandle>(null);

  const handleEdit = useCallback(() => {
    editFlowRef.current?.start();
    onEdit && onEdit();
  }, [onEdit]);

  const handleDelete = useCallback(() => {
    onDelete && onDelete(jobDetails.id);
  }, [jobDetails.id, onDelete]);

  const handleEditFlowComplete = useCallback(
    async (data: JobWithoutId) => {
      await handleEditJob({ ...data, id: jobDetails.id });
    },
    [handleEditJob, jobDetails.id]
  );

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
          onClick={handleEdit}
          className="mr-16 cursor-pointer"
        />
        <AiFillDelete
          size={"24px"}
          className="cursor-pointer"
          onClick={handleDelete}
        />
      </span>
      <CreateEditFlow
        ref={editFlowRef}
        mode={FlowMode.EDIT}
        onFlowComplete={handleEditFlowComplete}
        data={jobDetails}
      />
    </div>
  );
};

export default JobCard;
