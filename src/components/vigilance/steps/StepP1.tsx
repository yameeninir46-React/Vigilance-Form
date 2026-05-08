import { Button } from "@/components/ui/button";
import { useVigilanceForm } from "@/context/VigilanceFormContext";
import { TextField, SelectField, RadioField, DateField, TextAreaField } from "@/components/vigilance/FormField"; 

export const StepP1 = () => {
const { formData, updateField, setFormData } = useVigilanceForm();

  const fetchBPData = async () => {
  try {
     const res = await fetch(`http://localhost:4000/api/reports/${formData.bpNumber}`);
    //const res = await fetch(`http://localhost:4000/api/reports/1234567890`);
  // const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reports/${formData.bpNumber}`);

  
console.log(res)
    if (!res.ok) {
      alert("No data found for this BP");
      return;
    } 

    const data = await res.json();
    console.log("DATA:", data)

   setFormData((prev) => ({
  ...prev,

  consumerName: data.consumerName || "",
  mobile: data.mobile || "",
  email: data.email || "",
  address: data.address || "",
  dcZone: data.dcZone || "",
  categoryTariff: data.categoryTariff || "",
  designation: data.designation || "",

  //   STEP 3 ADD THESE (IMPORTANT)
  employeeNumber: data.employeeNumber || "",
  officerDesignation: data.designation || "",
   officerDivision: data.divisionName || "",
  officerMobile: data.mobile || "",
  officerEmail: data.email || "",
  teamDetails: data.teamDetails || "",sirNumber: data.sirNumber || "",
meterDetailsP3: data.meterDetailsP3 || "",
pulseKwh: data.pulseKwh || "",
loadAsFound: data.loadAsFound || "",
readingP3: data.readingP3 || "",
tariffCategoryFound: data.tariffCategoryFound || "",
purposeP3: data.purposeP3 || "",
meterLoadTestSingle: data.meterLoadTestSingle || "",
meterLoadTestThree: data.meterLoadTestThree || "",


//  STEP 4 (Document Attachments)
docSIR: data.docSIR || "",
docPanchname: data.docPanchname || "",
docPraveshTalashi: data.docPraveshTalashi || "",
docNajriNaksha: data.docNajriNaksha || "",
docWiringNaksha: data.docWiringNaksha || "",
docFormat2: data.docFormat2 || "",
docFormat3: data.docFormat3 || "",
docJaptiPatrak: data.docJaptiPatrak || "",
docSupurdagiPatrak: data.docSupurdagiPatrak || "",
docOther: data.docOther || "",
docRemark: data.docRemark || "",


// STEP 5 (BP Checked & Detected)
bpCheckedDetected: data.bpCheckedDetected || "",
bpCheckedRemark: data.bpCheckedRemark || "",


//  STEP 6 (Offence)
offence1: data.offence1 || "",
offence2: data.offence2 || "",
offence3: data.offence3 || "",
offence4: data.offence4 || "",
offence5: data.offence5 || "",
offence6: data.offence6 || "",
offence7: data.offence7 || "",
offence8: data.offence8 || "",
offence9: data.offence9 || "",
offence10: data.offence10 || "",
offence11: data.offence11 || "",
offence12: data.offence12 || "",
offence13: data.offence13 || "",
offence14: data.offence14 || "",
offence15: data.offence15 || "",
offence16: data.offence16 || "",
offence17: data.offence17 || "",
offenceOtherText: data.offenceOtherText || "",


// STEP 7 (Provisional Billing)
provisionalBillDate: data.provisionalBillDate || "",
provisionalBillAmount: data.provisionalBillAmount || "",
kwhUnitsRaised: data.kwhUnitsRaised || "",

energyCharge: data.energyCharge || "",
demandCharge: data.demandCharge || "",
vca: data.vca || "",
electricityDuty: data.electricityDuty || "",
cess: data.cess || "",
meterRent: data.meterRent || "",
currentSurcharge: data.currentSurcharge || "",
currentMonthBill: data.currentMonthBill || "",
arrearsExclSurcharge: data.arrearsExclSurcharge || "",
sd: data.sd || "",
otherChargeP7: data.otherChargeP7 || "",

billServedDate: data.billServedDate || "",
billServedSMS: data.billServedSMS || "",
billServedEmail: data.billServedEmail || "",
billServedSpeedPost: data.billServedSpeedPost || "",
billServedOther: data.billServedOther || "",

remarkP7: data.remarkP7 || "",

//  STEP 8 (Final Billing)
finalProvBillDate: data.finalProvBillDate || "",
finalProvBillAmount: data.finalProvBillAmount || "",

kwhUnitsRaisedP8: data.kwhUnitsRaisedP8 || "",
kvahP8: data.kvahP8 || "",

energyChargeP8: data.energyChargeP8 || "",
demandChargeP8: data.demandChargeP8 || "",
vcaP8: data.vcaP8 || "",
electricityDutyP8: data.electricityDutyP8 || "",
cessP8: data.cessP8 || "",
meterRentP8: data.meterRentP8 || "",
currentSurchargeP8: data.currentSurchargeP8 || "",
currentMonthBillP8: data.currentMonthBillP8 || "",
arrearsExclSurchargeP8: data.arrearsExclSurchargeP8 || "",
sdP8: data.sdP8 || "",
otherChargeP8: data.otherChargeP8 || "",

billServedDateP8: data.billServedDateP8 || "",
billServedSMSP8: data.billServedSMSP8 || "",
billServedEmailP8: data.billServedEmailP8 || "",
billServedSpeedPostP8: data.billServedSpeedPostP8 || "",
billServedOtherP8: data.billServedOtherP8 || "",

remarkP8: data.remarkP8 || "",

//  STEP 9 (Assessment)
assessmentPeriodFrom: data.assessmentPeriodFrom || "",
assessmentPeriodTo: data.assessmentPeriodTo || "",

unitsAssessed: data.unitsAssessed || "",
amountAssessed: data.amountAssessed || "",
penaltyAmount: data.penaltyAmount || "",
totalDues: data.totalDues || "",

assessmentRemarks: data.assessmentRemarks || "",


//  STEP 10 (Consumer Statement)
consumerPresent: data.consumerPresent || "",
consumerSignature: data.consumerSignature || "",

consumerStatement: data.consumerStatement || "",

witnessName: data.witnessName || "",
witnessStatement: data.witnessStatement || "",

//  STEP 11 (EMI + Connection Status)
emiOption: data.emiOption || "",
emiNumberGiven: data.emiNumberGiven || "",

amountPerEmi: data.amountPerEmi || "",
emiEndDate: data.emiEndDate || "",

emiPaidCount: data.emiPaidCount || "",
installmentAmountPaid: data.installmentAmountPaid || "",

totalPaidAgainstVigilance: data.totalPaidAgainstVigilance || "",
pendingArrearsVigilance: data.pendingArrearsVigilance || "",

connectionStatus: data.connectionStatus || "",
connectionStatusDate: data.connectionStatusDate || "",


// STEP 12 (Billing Timeline)
dateSubmissionBilling: data.dateSubmissionBilling || "",
dateProvisionalBillingSAP: data.dateProvisionalBillingSAP || "",
dateFinalBillingSAP: data.dateFinalBillingSAP || "",

period01: data.period01 || "",
periodProvisionalBilling: data.periodProvisionalBilling || "",

period02: data.period02 || "",
periodFinalBilling: data.periodFinalBilling || "",

billedWithinStandardTime: data.billedWithinStandardTime || "",

remarkP12: data.remarkP12 || "",



//  FIXED
  divisionOM: data.division || "",
  circleOM: data.circle || "",
  agreementLoad: data.agreementLoad || "",
  lastReading: data.lastReadingSAP || "",


  //  FIXED (nested)
  mfFound: data.multiplyingFactor?.asFound || "",
  mfBilled: data.multiplyingFactor?.asBilled || "",

  gisCoordinate: data.coordinates
    ? `${data.coordinates.lat}, ${data.coordinates.lng}`
    : "",

  connectionType: data.connectionType || "",

  dateOfChecking: data.dateOfChecking || "",

  }));


  } catch (err) {
  console.log("ERROR:", err)
  }
};

return (
    <>
      <fieldset className="space-y-4">
        <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">Basic Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <TextField name="serialNumber" label="Serial Number" disabled />
          <TextField name="uniqueNumber" label="Unique Number" disabled />
          <DateField name="dateOfChecking" label="Date of Checking" />
          <SelectField name="vigilanceDivision" label="Name of Vigilance Division" placeholder="Select Division" options={[
            { value: "div1", label: "Division 1" },
            { value: "div2", label: "Division 2" },
            { value: "div3", label: "Division 3" },
          ]} />
        </div>
      </fieldset>


      <fieldset className="space-y-4">
        <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">Vigilance Details</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <SelectField name="sourceOfBP" label="Source of BP Selection" options={[
            { value: "online", label: "Online Complaint" },
            { value: "smart", label: "Smart Meter Cell" },
            { value: "other", label: "Other Source" },
          ]} />
          <SelectField name="vigilanceType" label="Type of Vigilance Checking" options={[
            { value: "routine", label: "Routine" },
            { value: "inter", label: "Inter Division" },
            { value: "special", label: "Special" },
          ]} />
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-base font-semibold text-foreground border-b border-border pb-1 w-full">Consumer Details</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <div className="md:col-span-2 flex gap-2 items-end">
            <div className="flex-1 space-y-2">
              <TextField name="bpNumber" label="BP Number" placeholder="Enter BP Number" />
            </div>
            <Button type="button" variant="secondary" onClick={fetchBPData}>Fetch</Button>
          </div>
          <TextField name="consumerName" label="Name of Consumer" placeholder="Consumer name" className="md:col-span-2" />
          <TextField name="mobile" label="Mobile" placeholder="Mobile number" />
          <TextField name="email" label="Email" placeholder="Enter Email" />
          <TextAreaField name="address" label="Address" />
          <TextField name="gisCoordinate" label="GIS Coordinate" />
          <TextField name="categoryTariff" label="Category Tariff" />
          <TextField name="dcZone" label="Name of DC / Zone" />
          <TextField name="divisionOM" label="Division (O&M / City)" />
          <TextField name="circleOM" label="Circle (O&M / City)" />
          <TextField name="agreementLoad" label="Agreement Load" />
          <TextField name="lastReading" label="Last Reading Recorded into SAP" placeholder="Fetched from SAP" />
          <TextField name="mfFound" label="MF (Multiplying Factor) As Found" placeholder="Inserted by user" />
          <TextField name="mfBilled" label="MF As Billed in SAP" /> 
          <RadioField name="connectionType" label="Connection Type" options={[ 
            { value: "LT", label: "LT" },
            { value: "HT", label: "HT" },
           ]} />
        </div> 
      </fieldset>  
    </>
  );
};