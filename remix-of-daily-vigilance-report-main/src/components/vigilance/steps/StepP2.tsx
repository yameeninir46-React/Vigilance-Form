import { TextField, TextAreaField } from "@/components/vigilance/FormField";
import { useVigilanceForm } from "@/context/VigilanceFormContext";

export const StepP2 = () => {
  
  const { formData } = useVigilanceForm(); 
  
  return (
    <div className="bg-blue-50 min-h-screen p-6">

    
    <fieldset className="space-y-2">
      <legend className="text-base font-bold text-foreground border-b border-border pb-2 w-full">
        Details of Officer by Whom Vigilance Checking Done
      </legend>

     
      {/* Read-only fields copied from P1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <TextField name="serialNumber" label="1. Serial Number" disabled />
        <TextField name="dateOfChecking" label="2. Date of Checking" disabled />
        <TextField name="vigilanceDivision" label="3. Name of Vigilance Division" disabled />
        <TextField name="dcZone" label="4. Name of DC/Zone Where Vigilance Checking is Being Done" disabled />
        <TextField name="uniqueNumber" label="5. Unique Number (UN)" disabled />
        <TextField name="bpNumber" label="6. BP Number" disabled />

      </div>
      

      {/* Officer-specific editable fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 pt-4 border-t border-border">
        <TextField name="employeeNumber" label="7. Employee Number" placeholder="Fetched from SAP / Enter manually" />
        <TextField name="consumerName" label="8. Name" placeholder="Fetched from SAP / Enter manually" />
        <TextField name="officerDesignation" label="9. Designation" placeholder="Fetched from SAP / Enter manually" />
        <TextField name="officerDivision" label="10. (O&M / City) Division Name" placeholder="Fetched from SAP / Enter manually" />
        <TextField name="officerMobile" label="11. Mobile Number" placeholder="Fetched from SAP / Enter manually" />
        <TextField name="officerEmail" label="12. Email-ID" placeholder="Fetched from SAP / Enter manually" />
        <TextAreaField name="teamDetails" label="13. Team Details" placeholder="Will be inserted by user" className="md:col-span-2" />
      </div>
      
    </fieldset>
    </div>
  );
};
