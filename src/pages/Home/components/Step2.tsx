import { Button, Modal, TextInput } from "components/ui";
import React from "react";

const Step2 = () => {
  return (
    <Modal>
      <div className="w-577 h-564 bg-white p-32 relative box-content">
        <div className="flex justify-between">
          <p>Create a Job</p>
          <p>Step 2</p>
        </div>
        <div className="flex items-end justify-between mt-24">
          <TextInput
            placeholder="Minimum"
            label="Experience"
            containerClassName="w-full"
          />
          <span className="ml-24" />
          <TextInput placeholder="Maximum" containerClassName="w-full" />
        </div>
        <div className="flex items-end justify-between mt-24">
          <TextInput
            placeholder="Minimum"
            label="Salary"
            containerClassName="w-full"
          />
          <span className="ml-24" />
          <TextInput placeholder="Maximum" containerClassName="w-full" />
        </div>
        <TextInput
          containerClassName="mt-24"
          label="Total employee"
          placeholder="ex: 100"
        />
        <Button
          name="Save"
          containerClassName="absolute right-32 bottom-32"
          onPress={() => {}}
        />
      </div>
    </Modal>
  );
};

export default Step2;
