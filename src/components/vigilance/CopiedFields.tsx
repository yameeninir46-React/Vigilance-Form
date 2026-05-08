import { useVigilanceForm } from "@/context/VigilanceFormContext";

export const CopiedFields = () => {
  const { formData } = useVigilanceForm();
  const fields = [
  ["Serial Number", formData.serialNumber],
  ["Date of Checking", formData.dateOfChecking],
  ["Name of Vigilance Division", formData.vigilanceDivision],
  ["Name of DC/Zone", formData.dcZone],
  ["Unique Number (UN)", formData.uniqueNumber],
  ["BP Number", formData.bpNumber],

  //  ADD THESE
  ["Employee Number", formData.employeeNumber],
  ["Officer Name", formData.officerName],
  ["Designation", formData.officerDesignation],
  ["Division", formData.officerDivision],
];

  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-muted-foreground border-b border-border pb-1 w-full">
        Copied from Page 1
      </legend>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {fields.map(([label, value]) => (
          <div key={label} className="space-y-1 border border-border rounded-md p-2 bg-muted/30">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{label}</span>
            <p className="text-sm font-medium text-foreground truncate">{value || "—"}</p>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
