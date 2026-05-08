import { RadioField, TextField, TextAreaField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";

const OFFENCES = [
  { name: "offence1" as const, label: "1. Dishonestly taps, makes or causes to be made any connection" },
  { name: "offence2" as const, label: "2. Dishonestly tampered a meter / uses tampered meter / current reversing transformer / loop" },
  { name: "offence3" as const, label: "3. Dishonestly damaging / destroying an electric meter / apparatus" },
  { name: "offence4" as const, label: "4. Dishonestly use of electricity through a tampered meter" },
  { name: "offence5" as const, label: "5. Purpose other than for authorized" },
  { name: "offence6" as const, label: "6. Interference with meters or works of licensee" },
  { name: "offence7" as const, label: "7. Unauthorisedly connects any meter" },
  { name: "offence8" as const, label: "8. Unauthorisedly re-connects meter" },
  { name: "offence9" as const, label: "9. Lays or causes to be laid or connects up any works" },
  { name: "offence10" as const, label: "10. Maliciously injures any meter" },
  { name: "offence11" as const, label: "11. Unauthorised use of electricity" },
  { name: "offence12" as const, label: "12. Wrong MF" },
  { name: "offence13" as const, label: "13. Tariff Change" },
  { name: "offence14" as const, label: "14. Purpose Change" },
  { name: "offence15" as const, label: "15. Wrong Billing" },
  { name: "offence16" as const, label: "16. Excess Load" },
  { name: "offence17" as const, label: "17. Voltage / Current Missing / Tampered Meter" },
];

export const StepP6 = () => (
  <div className="space-y-6">
    <CopiedFields />
    <fieldset className="space-y-4">
      <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">
        Offence / Irregularity Details
      </legend>
      <p className="text-sm text-muted-foreground">Select "Given" or "Out of Option" for each offence type.</p>
      <div className="space-y-3">
        {OFFENCES.map((o) => (
          <div key={o.name} className="border border-border rounded-md p-3 bg-muted/20">
            <RadioField name={o.name} label={o.label} options={[
              { value: "given", label: "Given" },
              { value: "out_of_option", label: "Out of Option" },
            ]} />
          </div>
        ))}
        <TextField name="offenceOtherText" label="Other (specify)" placeholder="Enter other offence details" />
      </div>
    </fieldset>
  </div>
);
