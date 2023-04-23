import { Button, Modal, TextInput } from "components/ui";
import { Group } from "components/ui/RadioGroup";
import React, { useCallback, useEffect, useState } from "react";
import { Job } from "../../pages/Home/types";

export type Data = Pick<
  Job,
  | "minExp"
  | "maxExp"
  | "minSalary"
  | "maxSalary"
  | "totalEmployees"
  | "isQuickApply"
  | "isExternalApply"
>;

interface Props {
  onPrimaryCtaPress(data: Data): void;
  onModalClose(): void;
  visible: boolean;
  initialData?: Data;
}

const radioOptions = [
  {
    label: "Quick apply",
    id: "quickApply",
  },
  {
    label: "External apply",
    id: "externalApply",
  },
];

const Step2Modal = ({
  onPrimaryCtaPress,
  onModalClose,
  visible,
  initialData,
}: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(visible);
  const [data, setData] = useState<Data>({
    minExp: initialData?.minExp ?? "",
    maxExp: initialData?.maxExp ?? "",
    minSalary: initialData?.minSalary ?? "",
    maxSalary: initialData?.maxSalary ?? "",
    totalEmployees: initialData?.totalEmployees ?? "",
    isExternalApply: initialData?.isExternalApply ?? false,
    isQuickApply: initialData?.isQuickApply ?? false,
  });

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  const handleOnClose = useCallback(() => {
    setModalVisible((v) => !v);
    onModalClose();
  }, [onModalClose]);

  const handleSave = useCallback(() => {
    onPrimaryCtaPress(data);
  }, [data, onPrimaryCtaPress]);

  const handleTextInputs = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newData: Data = {
        ...data,
        [e.target.id]: e.target.value,
      };

      setData(newData);
    },
    [data]
  );

  const handleApplyTypeRadio = useCallback(
    (id: string) => {
      const newData: Data = {
        ...data,
        isExternalApply: id === "externalApply",
        isQuickApply: id === "quickApply",
      };

      setData(newData);
    },
    [data]
  );

  return (
    <Modal visible={modalVisible} onClose={handleOnClose}>
      <div className="w-577 h-564 bg-white p-32 relative box-content">
        <div className="flex justify-between">
          <p>Create a Job</p>
          <p>Step 2</p>
        </div>
        <div className="flex items-end justify-between mt-24">
          <TextInput
            id="minExp"
            placeholder="Minimum"
            label="Experience"
            containerClassName="w-full"
            onChange={handleTextInputs}
            type="number"
            defaultValue={initialData?.minExp ?? ""}
          />
          <span className="ml-24" />
          <TextInput
            id="maxExp"
            placeholder="Maximum"
            containerClassName="w-full"
            onChange={handleTextInputs}
            type="number"
            defaultValue={initialData?.maxExp ?? ""}
          />
        </div>
        <div className="flex items-end justify-between mt-24">
          <TextInput
            id="minSalary"
            placeholder="Minimum"
            label="Salary"
            containerClassName="w-full"
            onChange={handleTextInputs}
            type="number"
            defaultValue={initialData?.minSalary ?? ""}
          />
          <span className="ml-24" />
          <TextInput
            id="maxSalary"
            placeholder="Maximum"
            containerClassName="w-full"
            onChange={handleTextInputs}
            type="number"
            defaultValue={initialData?.maxSalary ?? ""}
          />
        </div>
        <TextInput
          id="totalEmployees"
          containerClassName="mt-24"
          label="Total employee"
          placeholder="ex: 100"
          onChange={handleTextInputs}
          type="number"
          defaultValue={initialData?.totalEmployees ?? ""}
        />

        <Group
          containerClassName="mt-24"
          label="Apply type"
          onChange={handleApplyTypeRadio}
          options={radioOptions}
          defaultId={
            initialData?.isQuickApply
              ? "quickApply"
              : initialData?.isExternalApply
              ? "externalApply"
              : undefined
          }
        />

        <Button
          name="Save"
          containerClassName="absolute right-32 bottom-32"
          onClick={handleSave}
        />
      </div>
    </Modal>
  );
};

export default Step2Modal;
