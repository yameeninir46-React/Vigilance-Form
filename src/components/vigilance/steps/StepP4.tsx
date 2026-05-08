import { TextAreaField } from "@/components/vigilance/FormField";
import { CopiedFields } from "@/components/vigilance/CopiedFields";
import { useVigilanceForm } from "@/context/VigilanceFormContext";

export const StepP4 = () => {
  const { setFormData } = useVigilanceForm();

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (!file) return;

    //  File type check
    const allowedTypes = ["application/pdf", "image/jpeg"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF or JPG files are allowed");
      return;
    }

    //  File size check (50KB)
    if (file.size > 50 * 1024) {
      alert("File size must be less than 50KB");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  return (
    <div className="space-y-6">
      <CopiedFields />

      <fieldset className="space-y-4">
        <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">
          Document Attachments
        </legend>

        <p className="text-sm text-muted-foreground">
          Upload documents (Only PDF/JPG, Max Size: 50KB)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

          {/* A1 */}
          <div>
            <label>(A1) Sight Inspection Report (SIR)</label>
            <input type="file" name="docSIR" onChange={handleFileChange} />
          </div>

          {/* A2 */}
          <div>
            <label>(A2) Panchname</label>
            <input type="file" name="docPanchname" onChange={handleFileChange} />
          </div>

          {/* A3 */}
          <div>
            <label>(A3) Pravesh / Talashi Patrak</label>
            <input type="file" name="docPraveshTalashi" onChange={handleFileChange} />
          </div>

          {/* A4 */}
          <div>
            <label>(A4) Najri Naksha</label>
            <input type="file" name="docNajriNaksha" onChange={handleFileChange} />
          </div>

          {/* A5 */}
          <div>
            <label>(A5) Wiring Naksha</label>
            <input type="file" name="docWiringNaksha" onChange={handleFileChange} />
          </div>

          {/* A6 */}
          <div>
            <label>(A6) Format-2</label>
            <input type="file" name="docFormat2" onChange={handleFileChange} />
          </div>

          {/* A7 */}
          <div>
            <label>(A7) Format-3</label>
            <input type="file" name="docFormat3" onChange={handleFileChange} />
          </div>

          {/* A8 */}
          <div>
            <label>(A8) Japti Patrak</label>
            <input type="file" name="docJaptiPatrak" onChange={handleFileChange} />
          </div>

          {/* A9 */}
          <div>
            <label>(A9) Supurdagi Patrak</label>
            <input type="file" name="docSupurdagiPatrak" onChange={handleFileChange} />
          </div>

          {/* A10 */}
          <div>
            <label>(A10) Other</label>
            <input type="file" name="docOther" onChange={handleFileChange} />
          </div>

          {/* Remark */}
          <TextAreaField
            name="docRemark"
            label="Remark"
            placeholder="Additional remarks"
            className="md:col-span-2"
          />
          

        </div>
      </fieldset>
    </div>
  );
};