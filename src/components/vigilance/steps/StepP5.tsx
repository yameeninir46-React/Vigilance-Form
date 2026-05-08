import { RadioField, TextAreaField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";

export const StepP5 = () => (
  <div className="space-y-6">
    <CopiedFields />
    <fieldset className="space-y-4">
      <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">
        BP — Checked 
      </legend>
      <div className="grid grid-cols-1 gap-y-5">
        <RadioField name="bpCheckedDetected" label="BP Checked & Detected for Billing?" options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]} />
        <TextAreaField name="bpCheckedRemark" label="Remark" placeholder="Will be inserted by user" />
      </div>
    </fieldset>
  </div>
);
