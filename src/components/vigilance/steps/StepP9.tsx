import { TextField, DateField, TextAreaField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";

export const StepP9 = () => (
  <div className="space-y-6">
    <CopiedFields />
    <fieldset className="space-y-4">
      <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">
        Assessment of Loss
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <DateField name="assessmentPeriodFrom" label="Assessment Period From" />
        <DateField name="assessmentPeriodTo" label="Assessment Period To" />
        <TextField name="unitsAssessed" label="Units Assessed (KWH)" placeholder="Enter total units" />
        <TextField name="amountAssessed" label="Amount Assessed (₹)" placeholder="Enter amount" />
        <TextField name="penaltyAmount" label="Penalty Amount (₹)" placeholder="Enter penalty" />
        <TextField name="totalDues" label="Total Dues (₹)" placeholder="Auto-calculated if possible" />
        <TextAreaField name="assessmentRemarks" label="Assessment Remarks" placeholder="Additional remarks" className="md:col-span-2" />
      </div>
    </fieldset>
  </div>
);
