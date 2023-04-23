import { Button, Modal, TextInput } from "components/ui";
import { Group } from "components/ui/RadioGroup";
import React, { useCallback, useEffect, useState } from "react";
import { Job } from "../types";

interface Props {
  onPrimaryCtaPress(data: Data): void;
  onModalClose(): void;
  visible: boolean;
}

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

const initialValue: Data = {
  minExp: undefined,
  maxExp: undefined,
  minSalary: undefined,
  maxSalary: undefined,
  totalEmployees: undefined,
  isQuickApply: false,
  isExternalApply: false,
};

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

const Step2Modal = ({ onPrimaryCtaPress, onModalClose, visible }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(visible);
  const [data, setData] = useState<Data>(initialValue);

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
          />
          <span className="ml-24" />
          <TextInput
            id="maxExp"
            placeholder="Maximum"
            containerClassName="w-full"
            onChange={handleTextInputs}
            type="number"
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
          />
          <span className="ml-24" />
          <TextInput
            id="maxSalary"
            placeholder="Maximum"
            containerClassName="w-full"
            onChange={handleTextInputs}
            type="number"
          />
        </div>
        <TextInput
          id="totalEmployees"
          containerClassName="mt-24"
          label="Total employee"
          placeholder="ex: 100"
          onChange={handleTextInputs}
          type="number"
        />

        <Group
          containerClassName="mt-24"
          label="Apply type"
          onChange={handleApplyTypeRadio}
          options={radioOptions}
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
