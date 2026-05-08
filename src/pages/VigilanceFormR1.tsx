import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import { VigilanceFormProvider, useVigilanceForm } from "@/context/VigilanceFormContext";
import { FormShell } from "@/components/vigilance/FormShell";
import { StepP1 } from "@/components/vigilance/steps/StepP1";
import { StepP2 } from "@/components/vigilance/steps/StepP2";
import { StepP3 } from "@/components/vigilance/steps/StepP3";
import { StepP4 } from "@/components/vigilance/steps/StepP4";
import { StepP5 } from "@/components/vigilance/steps/StepP5";
import { StepP6 } from "@/components/vigilance/steps/StepP6";
import { StepP7 } from "@/components/vigilance/steps/StepP7";
import { StepP8 } from "@/components/vigilance/steps/StepP8";
import { StepP9 } from "@/components/vigilance/steps/StepP9";
import { StepP10 } from "@/components/vigilance/steps/StepP10";
import { StepP11 } from "@/components/vigilance/steps/StepP11";
import { StepP12 } from "@/components/vigilance/steps/StepP12";

const STEPS: Record<number, React.FC> = {
  1: StepP1,
  2: StepP2,
  3: StepP3,
  4: StepP4,
  5: StepP5,
  6: StepP6,
  7: StepP7,
  8: StepP8,
  9: StepP9,
  10: StepP10,
  11: StepP11,
  12: StepP12,
};

const FormContent = () => {
  const { currentStep } = useVigilanceForm();
  const StepComponent = STEPS[currentStep];

  return (
    <FormShell>
      <StepComponent />
    </FormShell>
  );
};

const VigilanceFormR1 = () => (
  <VigilanceFormProvider>
    <FormContent />
  </VigilanceFormProvider>
);

export default VigilanceFormR1;