import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Step2Data, Step2Modal } from "components/Step2Modal";
import { Step1Data, Step1Modal } from "components/Step1Modal";
import { CreateEditJobSteps, JobWithoutId } from "pages/Home/types";

export enum FlowMode {
  "EDIT" = "EDIT",
  "CREATE" = "CREATE",
}

interface Props {
  onFlowComplete(data: JobWithoutId): Promise<void>;
  mode: FlowMode;
}

export interface FlowHandle {
  start(): void;
}

const CreateEditFlow = React.forwardRef<FlowHandle, Props>(
  ({ onFlowComplete, mode = FlowMode.CREATE }: Props, ref) => {
    const [step, setStep] = useState<CreateEditJobSteps>();
    const step1Data = useRef<Step1Data>();

    useImperativeHandle(ref, () => ({
      start: () => setStep(CreateEditJobSteps.Step1),
    }));

    const handleStep1Complete = useCallback((data: Step1Data) => {
      step1Data.current = data;
      setStep(CreateEditJobSteps.Step2);
    }, []);

    const handleStep2Complete = useCallback(
      async (data: Step2Data) => {
        setStep(undefined);
        if (!!step1Data.current) {
          await onFlowComplete({
            ...step1Data.current,
            ...data,
          });
        }
      },
      [onFlowComplete]
    );

    const handleStepClose = useCallback(() => {
      setStep(undefined);
    }, []);

    return (
      <>
        <Step1Modal
          visible={step === CreateEditJobSteps.Step1}
          onPrimaryCtaPress={handleStep1Complete}
          onModalClose={handleStepClose}
        />
        <Step2Modal
          visible={step === CreateEditJobSteps.Step2}
          onPrimaryCtaPress={handleStep2Complete}
          onModalClose={handleStepClose}
        />
      </>
    );
  }
);

export default CreateEditFlow;
