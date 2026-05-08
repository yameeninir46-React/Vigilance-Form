import { TextField, TextAreaField, DateField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";

export const StepP3 = () => (
  <div className="space-y-6">
    <CopiedFields />
    <fieldset className="space-y-4">
      <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">
        Site Inspection Report (SIR) — BP Wise
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <DateField name="dateOfChecking" label="Date of Checking" disabled />
        <TextField name="sirNumber" label="SIR Number" placeholder="Will be inserted by user" />
        <TextField name="meterDetailsP3" label="Meter Details" placeholder="Will be inserted by user" />
        <TextField name="pulseKwh" label="(Blink) Pulse / KWH" placeholder="Will be inserted by user" />
        <TextField name="loadAsFound" label="Load As Found" placeholder="Will be inserted by user" />
        <TextField name="readingP3" label="Reading" placeholder="Will be inserted by user" />
        <TextField name="tariffCategoryFound" label="Tariff Category As Found" placeholder="Will be inserted by user" />
        <TextField name="purposeP3" label="Purpose" placeholder="Will be inserted by user" />
      </div>
      <fieldset className="space-y-3 border border-border rounded-md p-4 mt-4">
        <legend className="text-sm font-semibold text-foreground px-2">Meter Load Test</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <TextField name="meterLoadTestSingle" label="Single Phase — 1Ø" placeholder="Will be inserted by user" />
          <TextField name="meterLoadTestThree" label="Three Phase — 3Ø" placeholder="Will be inserted by user" />
        </div>
      </fieldset>
    </fieldset>
  </div>
);
