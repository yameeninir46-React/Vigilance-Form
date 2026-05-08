import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, RadioField, DateField, TextAreaField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";
import { useVigilanceForm } from "@/context/VigilanceFormContext";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const StepP12 = () => {
  const navigate = useNavigate();
  const { formData } = useVigilanceForm();
  const [showSuccess, setShowSuccess] = useState(false);

 const handleSubmit = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/reports/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await res.text();

    console.log("Response:", result);
    console.log("Final form data:", formData);

    // success popup
    setShowSuccess(true);

  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <>
      <div className="space-y-6">
        <CopiedFields />

        <fieldset className="space-y-4">
          <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">
            Billing Timeline & Summary
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            <DateField name="dateSubmissionBilling" label="Date of Submission to Billing Team" />
            <DateField name="dateProvisionalBillingSAP" label="Date of Provisional Billing in SAP" />
            <DateField name="dateFinalBillingSAP" label="Date of Final Billing into SAP" />
            <TextField name="period01" label="Period 01" placeholder="Fetched from SAP" />
            <TextField name="periodProvisionalBilling" label="Period Taken for Provisional Billing" placeholder="Fetched from SAP" />
            <TextField name="period02" label="Period 02" placeholder="Fetched from SAP" />
            <TextField name="periodFinalBilling" label="Period Taken for Final Billing" placeholder="Fetched from SAP" />
            <RadioField name="billedWithinStandardTime" label="Billed Within Standard Time Limit?" options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]} /> 
            <TextAreaField name="remarkP12" label="Remark" placeholder="Additional remarks" className="md:col-span-2" />
          </div>
        </fieldset>

        {/* Quick Summary */}
        <fieldset className="space-y-4">
          <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">
            Quick Summary
          </legend>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {[
              ["Serial No.", formData.serialNumber],
              ["BP Number", formData.bpNumber],
              ["Consumer", formData.consumerName],
              ["Division", formData.vigilanceDivision],
              ["Connection", formData.connectionType],
              ["Provisional Amount", formData.provisionalBillAmount || "—"],
              ["Final Amount", formData.finalProvBillAmount || "—"],
              ["Total Paid", formData.totalPaidAgainstVigilance || "—"],
              ["Pending Arrears", formData.pendingArrearsVigilance || "—"],
            ].map(([label, value]) => (
              <div key={label} className="space-y-1 border border-border rounded-md p-3 bg-muted/30">
                <span className="text-xs text-muted-foreground">{label}</span>
                <p className="font-medium text-foreground truncate">{value || "—"}</p>
              </div>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="flex justify-center pt-4">
        <Button type="button" onClick={handleSubmit} className="px-12 py-3 text-base">
          Submit Report
        </Button>
      </div>

      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">✓ Form Submitted Successfully</AlertDialogTitle>
            <AlertDialogDescription>
              Your Daily Vigilance Checking Report has been submitted with Serial No. {formData.serialNumber}.
            </AlertDialogDescription>
            
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => navigate("/")}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
