import { TextField, RadioField, TextAreaField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";

export const StepP10 = () => (
  <div className="space-y-6">
    <CopiedFields />
    <fieldset className="space-y-4">
      <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">
        Consumer Statement
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <RadioField name="consumerPresent" label="Consumer Present During Inspection?" options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]} />
        <TextField name="consumerSignature" label="Consumer Signature / ID" placeholder="Name or ID of signee" />
        <TextAreaField name="consumerStatement" label="Consumer's Statement" placeholder="Record consumer's statement verbatim" className="md:col-span-2" />
        <TextField name="witnessName" label="Witness Name" placeholder="Name of witness present" />
        <TextAreaField name="witnessStatement" label="Witness Statement" placeholder="Record witness statement" />
      </div>
    </fieldset>
  </div>
);
