import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  RadioField,
  DateField,
  TextAreaField,
} from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";
import { useVigilanceForm } from "@/context/VigilanceFormContext";

export const StepP11 = () => {
   
  const navigate = useNavigate();
  const { formData } = useVigilanceForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/reports/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      });

      const result = await res.text();

      console.log("Response:", result);
      console.log("Final form data:", formData);

      setShowSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };


  return (
  <div className="bg-blue-50 min-h-screen p-6">
    <div className="space-y-6"></div>
    
      <div className="space-y-6">
        <CopiedFields />

        <fieldset className="space-y-4">
          <legend className="text-base font-bold text-foreground border-b border-border pb-2 w-full">
            Billing Timeline & Summary
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            <DateField
              name="dateSubmissionBilling"
              label="Date of Submission to Billing Team"
            />

            <DateField
              name="dateProvisionalBillingSAP"
              label="Date of Provisional Billing in SAP"
            />

            <DateField
              name="dateFinalBillingSAP"
              label="Date of Final Billing into SAP"
            />

            <TextField
              name="period01"
              label="Period 01"
              placeholder="Fetched from SAP"
            />

            <TextField
              name="periodProvisionalBilling"
              label="Period Taken for Provisional Billing"
              placeholder="Fetched from SAP"
            />

            <TextField
              name="period02"
              label="Period 02"
              placeholder="Fetched from SAP"
            />

            <TextField
              name="periodFinalBilling"
              label="Period Taken for Final Billing"
              placeholder="Fetched from SAP"
            />

            <RadioField
              name="billedWithinStandardTime"
              label="Billed Within Standard Time Limit?"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <TextAreaField
              name="remarkP12"
              label="Remark"
              placeholder="Additional remarks"
              className="md:col-span-2"
            />
          </div>
        </fieldset>

        

        {showSuccess && (
          <p className="text-green-600 font-medium">
            Data submitted successfully!
          </p>
        )}
        
      </div>
      </div>
  );
};