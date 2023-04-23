import { Button, Modal, TextInput } from "components";
import { useCallback, useEffect, useState } from "react";
import { Job } from "../../pages/Home/types";

export type Data = Pick<
  Job,
  "title" | "company" | "industry" | "location" | "remoteType"
>;

interface Props {
  onPrimaryCtaPress(data: Data): void;
  onModalClose(): void;
  visible: boolean;
  initialData?: Data;
}

const initialValue: Data = {
  title: "",
  company: "",
  industry: "",
  location: undefined,
  remoteType: undefined,
};

const Step1Modal = ({ visible, onModalClose, onPrimaryCtaPress }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(visible);
  const [data, setData] = useState<Data>(initialValue);

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  const handleOnClose = useCallback(() => {
    setModalVisible((v) => !v);
    onModalClose();
  }, [onModalClose]);

  const handleTextInputs = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newData = {
        ...data,
        [e.target.id]: e.target.value,
      };

      setData(newData);
    },
    [data]
  );

  const handleNext = useCallback(() => {
    onPrimaryCtaPress(data);
  }, [data, onPrimaryCtaPress]);

  return (
    <Modal visible={modalVisible} onClose={handleOnClose}>
      <div className="w-577 h-564 bg-white p-32 relative box-content">
        <div className="flex justify-between">
          <p>Create a Job</p>
          <p>Step 1</p>
        </div>
        <TextInput
          id="title"
          placeholder="ex. UX UI Designer"
          label="Job Title"
          required
          containerClassName="mt-24"
          onChange={handleTextInputs}
        />
        <TextInput
          id="company"
          placeholder="ex. Google"
          label="Company name"
          required
          containerClassName="mt-24"
          onChange={handleTextInputs}
        />
        <TextInput
          id="industry"
          placeholder="ex. Information Technology"
          label="Industry"
          required
          containerClassName="mt-24"
          onChange={handleTextInputs}
        />
        <div className="flex justify-between mt-24">
          <TextInput
            id="location"
            placeholder="ex. Chennai"
            label="Location"
            containerClassName="w-full"
            onChange={handleTextInputs}
          />
          <span className="ml-24" />
          <TextInput
            id="remoteType"
            placeholder="ex. In-office"
            label="Remote type"
            containerClassName="w-full"
            onChange={handleTextInputs}
          />
        </div>
        <Button
          name="Next"
          containerClassName="absolute right-32 bottom-32"
          onClick={handleNext}
        />
      </div>
    </Modal>
  );
};

export default Step1Modal;
