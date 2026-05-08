import { TextField, DateField, RadioField, SelectField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";

export const StepP11 = () => (
  <div className="space-y-6">
    <CopiedFields />
    <fieldset className="space-y-4">
      <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">
        Payment & Recovery Details
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <TextField name="billedAmountP11" label="Billed Amount (₹)" placeholder="Fetched from SAP" />
        <DateField name="finalBilledDateP11" label="Final Billed Date" />
      </div>
    </fieldset>

    <fieldset className="space-y-4">
      <legend className="text-sm font-semibold text-foreground border-b border-border pb-1 w-full">
        Paid Reference (1)
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5">
        <TextField name="paidRef1Number" label="Reference Number" placeholder="Fetched from SAP" />
        <DateField name="paidRef1Date" label="Date" />
        <TextField name="paidRef1Amount" label="Amount (₹)" placeholder="Fetched from SAP" />
      </div>
    </fieldset>

    <fieldset className="space-y-4">
      <legend className="text-sm font-semibold text-foreground border-b border-border pb-1 w-full">
        Paid Reference (2)
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5">
        <TextField name="paidRef2Number" label="Reference Number" placeholder="Fetched from SAP" />
        <DateField name="paidRef2Date" label="Date" />
        <TextField name="paidRef2Amount" label="Amount (₹)" placeholder="Fetched from SAP" />
      </div>
    </fieldset>

    <fieldset className="space-y-4">
      <legend className="text-sm font-semibold text-foreground border-b border-border pb-1 w-full">
        EMI Details
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <RadioField name="emiOption" label="EMI Option Given?" options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]} />
        <TextField name="emiNumberGiven" label="EMI Number Given" placeholder="Fetched from SAP" />
        <TextField name="amountPerEmi" label="Amount Per EMI (₹)" placeholder="Fetched from SAP" />
        <DateField name="emiEndDate" label="EMI End Date" />
        <TextField name="emiPaidCount" label="EMI Number Already Paid" placeholder="Fetched from SAP" />
        <TextField name="installmentAmountPaid" label="Installment Amount Paid (₹)" placeholder="Fetched from SAP" />
        <TextField name="totalPaidAgainstVigilance" label="Total Paid Amount Against Vigilance (₹)" placeholder="Fetched from SAP" />
        <TextField name="pendingArrearsVigilance" label="Pending Arrears Against Vigilance (₹)" placeholder="Fetched from SAP" />
      </div>
    </fieldset>

    <fieldset className="space-y-4">
      <legend className="text-sm font-semibold text-foreground border-b border-border pb-1 w-full">
        Consumer Connection Status
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <SelectField name="connectionStatus" label="Connection Status" options={[
          { value: "connected", label: "Connected" },
          { value: "disconnected", label: "Disconnected" },
          { value: "deconnected", label: "Deconnected" },
        ]} />
        <DateField name="connectionStatusDate" label="Date of Status Change" />
      </div>
    </fieldset>
  </div>
);
