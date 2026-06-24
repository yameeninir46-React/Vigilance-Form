import { TextField, DateField, TextAreaField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";

export const StepP7 = () => (
  <div className="bg-blue-50 min-h-screen p-6">
  <div className="space-y-6">
    <CopiedFields />
    <fieldset className="space-y-4">
       <legend className="text-base font-bold text-foreground border-b border-border pb-2 w-full">
        Provisional Billing Details
      </legend>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <DateField name="provisionalBillDate" label="Provisional Billed Date" />
        <TextField name="provisionalBillAmount" label="Provisional Billed Amount (₹)" placeholder="Enter amount" />
        <TextField name="kwhUnitsRaised" label="KWH Units Raised (into SAP)" placeholder="Enter units" />
        <TextField name="kvahP7" label="KVAH" placeholder="Fetched/Manual" />
        <TextField name="energyCharge" label="Energy Charge (₹)" placeholder="Fetched/Manual" />
        <TextField name="demandCharge" label="Demand Charge (₹)" placeholder="Fetched/Manual" />
        <TextField name="vca" label="VCA (₹)" placeholder="Fetched/Manual" />
        <TextField name="electricityDuty" label="Electricity Duty (₹)" placeholder="Fetched/Manual" />
        <TextField name="cess" label="CESS (₹)" placeholder="Fetched/Manual" />
        <TextField name="meterRent" label="Meter Rent (₹)" placeholder="Fetched/Manual" />
        <TextField name="currentSurcharge" label="Current Surcharge (₹)" placeholder="Fetched/Manual" />
        <TextField name="currentMonthBill" label="Current Month Bill (₹)" placeholder="Fetched/Manual" />
        <TextField name="arrearsExclSurcharge" label="Arrears Excluding Surcharge (₹)" placeholder="Fetched/Manual" />
        <TextField name="sd" label="SD (₹)" placeholder="Fetched/Manual" />
        <TextField name="otherChargeP7" label="Other Charge (₹)" placeholder="Enter manually" />
        <DateField name="billServedDate" label="Provisional Bill Consumer Served Date" />
      </div>
    </fieldset>

    <fieldset className="space-y-4">
      <legend className="text-base font-bold text-foreground border-b border-border pb-2 w-full">
        Bill Served to Consumer
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <TextField name="billServedSMS" label="SMS Reference" placeholder="Reference number" />
        <TextField name="billServedEmail" label="Email Reference" placeholder="Reference number" />
        <TextField name="billServedSpeedPost" label="Speed Post Reference" placeholder="Reference number" />
        <TextField name="billServedOther" label="Other Mode Reference" placeholder="Reference number" />
        <TextAreaField name="remarkP7" label="Remark" placeholder="Additional remarks" className="md:col-span-2" />
      </div>
    </fieldset>
  </div>
  </div>
);
