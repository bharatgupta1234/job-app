import { Button, Modal, TextInput } from "components";
import { useCallback, useEffect, useState } from "react";
import { Job } from "../../pages/Home/types";
import { capitalize } from "utils/string";
import { error } from "console";

export type Data = Pick<
  Job,
  "title" | "company" | "industry" | "location" | "remoteType"
>;
const requiredFields: Array<keyof Data> = ["title", "company", "industry"];
interface Error {
  fieldName: string;
  error: string;
}

interface Props {
  onPrimaryCtaPress(data: Data): void;
  onModalClose(): void;
  visible: boolean;
  initialData?: Data;
}

const Step1Modal = ({
  visible,
  onModalClose,
  onPrimaryCtaPress,
  initialData,
}: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(visible);
  const [data, setData] = useState<Data>({
    title: initialData?.title ?? "",
    company: initialData?.company ?? "",
    industry: initialData?.industry ?? "",
    location: initialData?.location ?? "",
    remoteType: initialData?.remoteType ?? "",
  });
  const [errors, setErrors] = useState<Error[]>([{ fieldName: "", error: "" }]);

  useEffect(() => {
    setModalVisible(visible);
    return () => setErrors([]);
  }, [visible]);

  const handleOnClose = useCallback(() => {
    setModalVisible((v) => !v);
    setErrors([]);
    setData({
      title: "",
      company: "",
      industry: "",
      location: "",
      remoteType: "",
    });
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
    const errs: Error[] = [];
    requiredFields.forEach((field) => {
      if (!data[field]) {
        errs.push({
          fieldName: field,
          error: `${capitalize(field)} is required`,
        });
      }
    });
    setErrors(errs);
    if (errs.length !== 0) {
      return;
    }
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
          defaultValue={initialData?.title ?? ""}
          errorMessage={errors.find((err) => err.fieldName === "title")?.error}
        />
        <TextInput
          id="company"
          placeholder="ex. Google"
          label="Company name"
          required
          containerClassName="mt-24"
          onChange={handleTextInputs}
          defaultValue={initialData?.company ?? ""}
          errorMessage={
            errors.find((err) => err.fieldName === "company")?.error
          }
        />
        <TextInput
          id="industry"
          placeholder="ex. Information Technology"
          label="Industry"
          required
          containerClassName="mt-24"
          onChange={handleTextInputs}
          defaultValue={initialData?.industry ?? ""}
          errorMessage={
            errors.find((err) => err.fieldName === "industry")?.error
          }
        />
        <div className="flex justify-between mt-24">
          <TextInput
            id="location"
            placeholder="ex. Chennai"
            label="Location"
            containerClassName="w-full"
            onChange={handleTextInputs}
            defaultValue={initialData?.location ?? ""}
          />
          <span className="ml-24" />
          <TextInput
            id="remoteType"
            placeholder="ex. In-office"
            label="Remote type"
            containerClassName="w-full"
            onChange={handleTextInputs}
            defaultValue={initialData?.remoteType ?? ""}
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
