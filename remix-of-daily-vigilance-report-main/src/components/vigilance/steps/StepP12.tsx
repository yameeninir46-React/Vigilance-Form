import { TextField, DateField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";
import { useVigilanceForm } from "@/context/VigilanceFormContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


  
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
  const { formData } = useVigilanceForm();
  console.log("formData:", formData);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  console.log("StepP12 Data:", formData);

 
  const navigate = useNavigate();
  const handleSubmit = async () => {
  if (
    !formData.dateSubmissionBilling ||
    !formData.dateFinalBillingSAP ||
    !formData.remarkP12
  ) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/reports/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      
    });

    if (!res.ok) {
      throw new Error("Submission failed");
    }

    setShowSuccess(true);
  } catch (error) {
    console.error(error);
  }
};

  return (

  <div className="bg-blue-50 min-h-screen p-6">
  <div className="space-y-6">
    <CopiedFields />
       <legend className="text-base font-bold text-foreground border-b border-border pb-2 w-full">
         FIR Cases Compounded Information
       </legend>
       
     
       <div className="overflow-x-auto">
        <table className="w-full border border-gray-400 bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 w-16">Sr.</th>
              <th className="border p-2">Particulars</th>
              <th className="border p-2">Details</th>
            </tr>
          </thead>

          <tbody>
            {/* FIR */}
            <tr>
              <td className="border p-2">7</td>
              <td className="border p-2 font-semibold">FIR No.</td>
              <td className="border p-2">
                <TextField
                  name="firNo"
                  label=""
                  placeholder="Enter FIR Number"
                />
              </td>
            </tr>

            <tr>
              <td className="border p-2">8</td>
              <td className="border p-2 font-semibold">
                Place Where FIR Lodged
              </td>
              <td className="border p-2">
                <TextField
                  name="firPlace"
                  label=""
                  placeholder="Enter Place"
                />
              </td>
            </tr>

            <tr>
              <td className="border p-2">9</td>
              <td className="border p-2 font-semibold">Date</td>
              <td className="border p-2">
                <DateField
                  name="firDate"
                  label=""
                />
              </td>
            </tr>

            {/* SPECIAL COURTS */}
            <tr>
              <td
                colSpan={3}
                className="border p-3 bg-blue-100 font-bold"
              >
                SPECIAL COURTS
              </td>
            </tr>

            <tr>
              <td className="border p-2">10</td>
              <td className="border p-2">Court No. If Any</td>
              <td className="border p-2">
                <TextField
                  name="courtNo"
                  label=""
                  placeholder="Enter Court Number"
                />

              </td>
            </tr>

            <tr>
              <td className="border p-2">11</td>
              <td className="border p-2">Court Name / Place</td>
              <td className="border p-2">
                <TextField
                  name="courtName"
                  label=""
                  placeholder="Enter Court Name"
                />
              </td>
            </tr>

            <tr>
              <td className="border p-2">12</td>
              <td className="border p-2">Date</td>
              <td className="border p-2">
                <DateField
                  name="courtDate"
                  label=""
                />
              </td>
            </tr>

            {/* CASES CONVICTED */}
            <tr>
              <td
                colSpan={3}
                className="border p-3 bg-blue-100 font-bold" 
              >
                CASES CONVICTED
              </td>
            </tr>

            <tr>
              <td className="border p-2">13</td>
              <td className="border p-2">No. If Any</td>
              <td className="border p-2">
                <TextField
                  name="convictedNo"
                  label=""
                  placeholder="Enter Number"
                />
              </td>
            </tr>

            <tr>
              <td className="border p-2">14</td>
              <td className="border p-2">Court / Forum / Place</td>
              <td className="border p-2">
                <TextField
                  name="convictedPlace"
                  label=""
                  placeholder="Enter Place"
                />
              </td>
            </tr>

            <tr>
              <td className="border p-2">15</td>
              <td className="border p-2">Date</td>
              <td className="border p-2">
                <DateField
                  name="convictedDate"
                  label=""
                />
              </td>
            </tr>


            {/* CASES COMPOUNDED */}
            <tr>
              <td
                colSpan={3}
                className="border p-3 bg-blue-100 font-bold"
              >
                CASES COMPOUNDED
              </td>
            </tr>

            <tr>
              <td className="border p-2">16</td>
              <td className="border p-2">No. If Any</td>
              <td className="border p-2">
                <TextField
                  name="compoundedNo"
                  label=""
                  placeholder="Enter Number"
                />
              </td>
            </tr>

            <tr>
              <td className="border p-2">17</td>
              <td className="border p-2">
                Place From Where Compounded
              </td>
              <td className="border p-2">
                <TextField
                  name="compoundedPlace"
                  label=""
                  placeholder="Enter Place"
                />
              </td>
            </tr>

            <tr>
              <td className="border p-2">18</td>
              <td className="border p-2">Date</td>
              <td className="border p-2">
                <DateField
                  name="compoundedDate"
                  label=""
                />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      </div>

      <legend className="text-base font-bold text-foreground border-b border-border pb-2 w-full">
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
].map(([label, value]: [string, string]) => (
  <div
    key={label}
    className="space-y-1 border border-border rounded-md p-3 bg-muted/30"
  >
    <span className="text-xs text-muted-foreground">
      {label}
    </span>

    <p className="font-medium text-foreground truncate">
      {value || "—"}
    </p>
  </div>
))}
</div>

  {/* Submit Button */}

  <div className="flex justify-center pt-4">

  <Button
  type="button"
  onClick={handleSubmit}
  className="px-12 py-3 text-base"
  > 
  Submit Report
  </Button>      

  </div>
      

  {/* Success Popup */}

  <AlertDialog
    open={showSuccess}
      onOpenChange={setShowSuccess}
      >

        <AlertDialogContent>
           <AlertDialogHeader>

            <AlertDialogTitle className="text-green-600 text-xl">
              ✓ Form Submitted Successfully
            </AlertDialogTitle>

            <AlertDialogDescription>

              Your Daily Vigilance Checking Report has been submitted successfully.

              <br />

              Serial No:
              <span className="font-semibold">
                {" "}
                {formData.serialNumber}
              </span>

            </AlertDialogDescription>

          </AlertDialogHeader>

          <AlertDialogFooter>

            <AlertDialogAction
              onClick={() => navigate("/dashboard")}
            >
              OK
            </AlertDialogAction>


          </AlertDialogFooter>
        </AlertDialogContent>

      </AlertDialog>
      </div>
  )};
