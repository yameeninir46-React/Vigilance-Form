import { TextField, DateField, TextAreaField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";

export const StepP8 = () => (
  <div className="space-y-6">
    <CopiedFields />
    <fieldset className="space-y-4">
      <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">
        Final Billing Details
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <DateField name="finalProvBillDate" label="Final Billed Date" />
        <TextField name="finalProvBillAmount" label="Final Billed Amount (₹)" placeholder="Enter amount" />
        <TextField name="kwhUnitsRaisedP8" label="KWH Units Raised" placeholder="Fetched/Manual" />
        <TextField name="kvahP8" label="KVAH" placeholder="Fetched/Manual" />
        <TextField name="energyChargeP8" label="Energy Charge (₹)" placeholder="Fetched/Manual" />
        <TextField name="demandChargeP8" label="Demand Charge (₹)" placeholder="Fetched/Manual" />
        <TextField name="vcaP8" label="VCA (₹)" placeholder="Fetched/Manual" />
        <TextField name="electricityDutyP8" label="Electricity Duty (₹)" placeholder="Fetched/Manual" />
        <TextField name="cessP8" label="CESS (₹)" placeholder="Fetched/Manual" />
        <TextField name="meterRentP8" label="Meter Rent (₹)" placeholder="Fetched/Manual" />
        <TextField name="currentSurchargeP8" label="Current Surcharge (₹)" placeholder="Fetched/Manual" />
        <TextField name="currentMonthBillP8" label="Current Month Bill (₹)" placeholder="Fetched/Manual" />
        <TextField name="arrearsExclSurchargeP8" label="Arrears Excluding Surcharge (₹)" placeholder="Fetched/Manual" />
        <TextField name="sdP8" label="SD (₹)" placeholder="Fetched/Manual" />
        <TextField name="otherChargeP8" label="Other Charge (₹)" placeholder="Enter manually" />
      </div>
    </fieldset>

    <fieldset className="space-y-4">
      <legend className="text-sm font-semibold text-foreground border-b border-border pb-1 w-full">
        Bill Served to Consumer
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <DateField name="billServedDateP8" label="Bill Served Date" />
        <TextField name="billServedSMSP8" label="SMS Reference" placeholder="Reference number" />
        <TextField name="billServedEmailP8" label="Email Reference" placeholder="Reference number" />
        <TextField name="billServedSpeedPostP8" label="Speed Post Reference" placeholder="Reference number" />
        <TextField name="billServedOtherP8" label="Other Mode Reference" placeholder="Reference number" />
        <TextAreaField name="remarkP8" label="Remark" placeholder="Additional remarks" className="md:col-span-2" />
      </div>
    </fieldset>
  </div>
);
