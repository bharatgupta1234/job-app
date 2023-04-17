import { Button, Modal, TextInput } from "components";

const Step1 = () => {
  return (
    <Modal>
      <div className="w-577 h-564 bg-white p-32 relative box-content">
        <div className="flex justify-between">
          <p>Create a Job</p>
          <p>Step 1</p>
        </div>
        <TextInput
          placeholder="ex. UX UI Designer"
          label="Job Title"
          required
          containerClassName="mt-24"
        />
        <TextInput
          placeholder="ex. Google"
          label="Company name"
          required
          containerClassName="mt-24"
        />
        <TextInput
          placeholder="ex. Information Technology"
          label="Industry"
          required
          containerClassName="mt-24"
        />
        <div className="flex justify-between mt-24">
          <TextInput
            placeholder="ex. Chennai"
            label="Location"
            containerClassName="w-full"
          />
          <span className="ml-24" />
          <TextInput
            placeholder="ex. In-office"
            label="Remote type"
            containerClassName="w-full"
          />
        </div>
        <Button
          name="Next"
          containerClassName="absolute right-32 bottom-32"
          onPress={() => {}}
        />
      </div>
    </Modal>
  );
};

export default Step1;
