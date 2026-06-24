import React, { createContext, useContext, useState, useCallback } from "react";

export interface VigilanceFormData {
  // P1 - Basic Info
  serialNumber: string;
  uniqueNumber: string;
  dateOfChecking: string;
  vigilanceDivision: string;
  sourceOfBP: string;
  vigilanceType: string;
  // P1 - Consumer Details
  bpNumber: string;
  consumerName: string;
  mobile: string;
  email: string;
  address: string;
  gisCoordinate: string;
  categoryTariff: string;
  dcZone: string;
  divisionOM: string;
  circleOM: string;
  agreementLoad: string;
  lastReading: string;
  mfFound: string;
  mfBilled: string;
  connectionType: string;
  // P2 - Officer Details
  employeeNumber: string;
  officerDesignation: string;
  officerDivision: string;
  officerMobile: string;
  officerEmail: string;
  teamDetails: string;
  // P2 - Meter Details (SAP)
  meterMake: string;
  meterSrNo: string;
  meterCapacity: string;
  meterInstallDate: string;
  blinkingPerKwt: string;
  // P3 - Site Inspection Report
  sirNumber: string;
  meterDetailsP3: string;
  pulseKwh: string;
  loadAsFound: string;
  readingP3: string;
  tariffCategoryFound: string;
  purposeP3: string;
  meterLoadTestSingle: string;
  meterLoadTestThree: string;
  // P4 - Document Attachments
  docSIR: string;
  docPanchname: string;
  docPraveshTalashi: string;
  docNajriNaksha: string;
  docWiringNaksha: string;
  docFormat2: string;
  docFormat3: string;
  docJaptiPatrak: string;
  docSupurdagiPatrak: string;
  docOther: string;
  docRemark: string;
  // P5 - BP Checked & Detected
  bpCheckedDetected: string;
  bpCheckedRemark: string;
  // P6 - Offence / Irregularity
  offence1: string;
  offence2: string;
  offence3: string;
  offence4: string;
  offence5: string;
  offence6: string;
  offence7: string;
  offence8: string;
  offence9: string;
  offence10: string;
  offence11: string;
  offence12: string;
  offence13: string;
  offence14: string;
  offence15: string;
  offence16: string;
  offence17: string;
  offenceOtherText: string;
  
  // P7 - Provisional Billing
  provisionalBillDate: string;
  provisionalBillAmount: string;
  kwhUnitsRaised: string;
  kvahP7: string;
  energyCharge: string;
  demandCharge: string;
  vca: string;
  electricityDuty: string;
  cess: string;
  meterRent: string;
  currentSurcharge: string;
  currentMonthBill: string;
  arrearsExclSurcharge: string;
  sd: string;
  otherChargeP7: string;
  billServedDate: string;
  billServedSMS: string;
  billServedEmail: string;
  billServedSpeedPost: string;
  billServedOther: string;
  remarkP7: string;

  // P8 - Final Billing

  finalProvBillDate: string;
  finalProvBillAmount: string;
  kwhUnitsRaisedP8: string;
  kvahP8: string;
  energyChargeP8: string;
  demandChargeP8: string;
  vcaP8: string;
  electricityDutyP8: string;
  cessP8: string;
  meterRentP8: string;
  currentSurchargeP8: string;
  currentMonthBillP8: string;
  arrearsExclSurchargeP8: string;
  sdP8: string;
  otherChargeP8: string;
  billServedDateP8: string;
  billServedSMSP8: string;
  billServedEmailP8: string;
  billServedSpeedPostP8: string;
  billServedOtherP8: string;
  remarkP8: string;

// P9 - Assessment Details
dateSubmissionBilling: string;
  dateProvisionalBillingSAP: string;
  dateFinalBillingSAP: string;
  period01: string;
  periodProvisionalBilling: string;
  period02: string;
  periodFinalBilling: string;
  billedWithinStandardTime: string;
  remarkP12: string;
  
  // P10 - Consumer Statement
  consumerPresent: string;
  consumerStatement: string;
  consumerSignature: string;
  witnessName: string;
  witnessStatement: string;

  // P11 - Payment & EMI Details
  billedAmountP11: string;
  finalBilledDateP11: string;
  paidRef1Number: string;
  paidRef1Date: string;
  paidRef1Amount: string;
  paidRef2Number: string;
  paidRef2Date: string;
  paidRef2Amount: string;
  emiOption: string;
  emiNumberGiven: string;
  amountPerEmi: string;
  emiEndDate: string;
  emiPaidCount: string;
  installmentAmountPaid: string;
  totalPaidAgainstVigilance: string;
  pendingArrearsVigilance: string;
  connectionStatus: string;
  connectionStatusDate: string;

  // P12 - Billing Timeline
assessmentPeriodFrom: string;
assessmentPeriodTo: string;
unitsAssessed: string;
amountAssessed: string;
penaltyAmount: string;
totalDues: string;
assessmentRemarks: string;
  
firNo: string;
firPlace: string;
firDate: string;

courtNo: string;
courtName: string;
courtDate: string;

convictedNo: string;
convictedPlace: string;
convictedDate: string;

compoundedNo: string;
compoundedPlace: string;
compoundedDate: string;
}

const defaultFormData: VigilanceFormData = {
  serialNumber: "", uniqueNumber: "", dateOfChecking: "", vigilanceDivision: "",
  sourceOfBP: "", vigilanceType: "", bpNumber: "", consumerName: "", mobile: "",
  email: "", address: "", gisCoordinate: "", categoryTariff: "", dcZone: "",
  divisionOM: "", circleOM: "", agreementLoad: "", lastReading: "", mfFound: "",
  mfBilled: "", connectionType: "",
  employeeNumber: "", officerDesignation: "", officerDivision: "",
  officerMobile: "", officerEmail: "", teamDetails: "",
  meterMake: "", meterSrNo: "", meterCapacity: "", meterInstallDate: "", blinkingPerKwt: "",
  sirNumber: "", meterDetailsP3: "", pulseKwh: "", loadAsFound: "", readingP3: "",
  tariffCategoryFound: "", purposeP3: "", meterLoadTestSingle: "", meterLoadTestThree: "",
  docSIR: "", docPanchname: "", docPraveshTalashi: "", docNajriNaksha: "", docWiringNaksha: "",
  docFormat2: "", docFormat3: "", docJaptiPatrak: "", docSupurdagiPatrak: "", docOther: "", docRemark: "",
  bpCheckedDetected: "", bpCheckedRemark: "",
  offence1: "", offence2: "", offence3: "", offence4: "", offence5: "", offence6: "",
  offence7: "", offence8: "", offence9: "", offence10: "", offence11: "", offence12: "",
  offence13: "", offence14: "", offence15: "", offence16: "", offence17: "", offenceOtherText: "",
  provisionalBillDate: "", provisionalBillAmount: "", kwhUnitsRaised: "", kvahP7: "", energyCharge: "",
  demandCharge: "", vca: "", electricityDuty: "", cess: "", meterRent: "", currentSurcharge: "",
  currentMonthBill: "", arrearsExclSurcharge: "", sd: "", otherChargeP7: "",
  billServedDate: "", billServedSMS: "", billServedEmail: "", billServedSpeedPost: "", billServedOther: "", remarkP7: "",
  finalProvBillDate: "", finalProvBillAmount: "", kwhUnitsRaisedP8: "", kvahP8: "",
  energyChargeP8: "", demandChargeP8: "", vcaP8: "", electricityDutyP8: "", cessP8: "",
  meterRentP8: "", currentSurchargeP8: "", currentMonthBillP8: "", arrearsExclSurchargeP8: "",
  sdP8: "", otherChargeP8: "", billServedDateP8: "", billServedSMSP8: "", billServedEmailP8: "",
  billServedSpeedPostP8: "", billServedOtherP8: "", remarkP8: "",
  assessmentPeriodFrom: "", assessmentPeriodTo: "", unitsAssessed: "", amountAssessed: "",
  penaltyAmount: "", totalDues: "", assessmentRemarks: "",
  consumerPresent: "", consumerStatement: "", consumerSignature: "", witnessName: "", witnessStatement: "",
  billedAmountP11: "", finalBilledDateP11: "", paidRef1Number: "", paidRef1Date: "", paidRef1Amount: "",
  paidRef2Number: "", paidRef2Date: "", paidRef2Amount: "", emiOption: "", emiNumberGiven: "",
  amountPerEmi: "", emiEndDate: "", emiPaidCount: "", installmentAmountPaid: "",
  totalPaidAgainstVigilance: "", pendingArrearsVigilance: "", connectionStatus: "", connectionStatusDate: "",
  dateSubmissionBilling: "", dateProvisionalBillingSAP: "", dateFinalBillingSAP: "",
  period01: "", periodProvisionalBilling: "", period02: "", periodFinalBilling: "",
  billedWithinStandardTime: "", remarkP12: "", firNo: "",firPlace: "",firDate: "",courtNo: "",courtName: "",courtDate: "",convictedNo: "",convictedPlace: "",convictedDate: "",compoundedNo: "",
compoundedPlace: "",compoundedDate: "",

}; 

interface FormContextType {
  formData: VigilanceFormData; 
  setFormData: React.Dispatch<React.SetStateAction<VigilanceFormData>>;
  updateField: (name: keyof VigilanceFormData, value: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalSteps: number;
}

const FormContext = createContext<FormContextType | null>(null);

export const useVigilanceForm = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useVigilanceForm must be used within FormProvider");
  return ctx;
};


export const VigilanceFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<VigilanceFormData>(() => ({
    ...defaultFormData,

    serialNumber: String(Math.floor(1000 + Math.random() * 9000)),
    uniqueNumber: "UN" + Date.now(),
  }));
  const [currentStep, setCurrentStep] = useState(1);

  // 🔹 Use this updateField
 const updateField = useCallback((name: keyof VigilanceFormData, value: string) => {
  setFormData((prev) => ({ 
    ...prev,
    [name]: value,
 }));
}, []);


  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        updateField,
        currentStep,
        setCurrentStep,
        totalSteps: 12,
      }}
    >


      {children}
    </FormContext.Provider>
  );
};