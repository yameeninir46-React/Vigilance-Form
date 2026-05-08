// console.log("reportRoutes loaded");

const express = require("express");
const router = express.Router();
const Report = require("./report");

const mapFormData = (body) => {
  return {
    bpNumber: body.bpNumber,

    // STEP 1
    consumerName: body.consumerName,
    mobile: body.mobile,
    email: body.email,
    address: body.address,

    coordinates: body.gisCoordinate
      ? {
          lat: parseFloat(body.gisCoordinate.split(",")[0]),
          lng: parseFloat(body.gisCoordinate.split(",")[1]),
        }
      : {},

    categoryTariff: body.categoryTariff,
    dcZone: body.dcZone,
    division: body.divisionOM,
    circle: body.circleOM,
    agreementLoad: body.agreementLoad,
    lastReadingSAP: body.lastReading,

    multiplyingFactor: {
      asFound: body.mfFound,
      asBilled: body.mfBilled,
    },

    connectionType: body.connectionType,

    // STEP 2
    employeeNumber: body.employeeNumber,
    designation: body.officerDesignation,
    divisionName: body.officerDivision,
    teamDetails: body.teamDetails,
    officerMobile: body.officerMobile,
    officerEmail: body.officerEmail,

    // STEP 3
    sirNumber: body.sirNumber,
    meterDetails: body.meterDetailsP3,
    pulseKwh: body.pulseKwh,
    loadAsFound: body.loadAsFound,
    reading: body.readingP3,
    tariffCategoryFound: body.tariffCategoryFound,
    purpose: body.purposeP3,

    meterLoadTest: {
      singlePhase: body.meterLoadTestSingle,
      threePhase: body.meterLoadTestThree,
    },

    // STEP 4
    documents: {
      docSIR: body.docSIR,
      docPanchname: body.docPanchname,
      docPraveshTalashi: body.docPraveshTalashi,
      docNajriNaksha: body.docNajriNaksha,
      docWiringNaksha: body.docWiringNaksha,
      docFormat2: body.docFormat2,
      docFormat3: body.docFormat3,
      docJaptiPatrak: body.docJaptiPatrak,
      docSupurdagiPatrak: body.docSupurdagiPatrak,
      docOther: body.docOther,
      remark: body.docRemark,
    },

    // STEP 7
    provisionalBilling: {
      date: body.provisionalBillDate,
      amount: body.provisionalBillAmount,
      kwhUnitsRaised: body.kwhUnitsRaised,

      charges: {
        energyCharge: body.energyCharge,
        demandCharge: body.demandCharge,
        vca: body.vca,
        electricityDuty: body.electricityDuty,
        cess: body.cess,
        meterRent: body.meterRent,
        currentSurcharge: body.currentSurcharge,
        currentMonthBill: body.currentMonthBill,
        arrearsExclSurcharge: body.arrearsExclSurcharge,
        sd: body.sd,
        otherCharge: body.otherChargeP7,
      },

      billServed: {
        date: body.billServedDate,
        sms: body.billServedSMS,
        email: body.billServedEmail,
        speedPost: body.billServedSpeedPost,
        other: body.billServedOther,
      },

      remark: body.remarkP7,
    },

    // STEP 8
    finalBilling: {
      date: body.finalProvBillDate,
      amount: body.finalProvBillAmount,
      kwhUnitsRaised: body.kwhUnitsRaisedP8,
      kvah: body.kvahP8,

      charges: {
        energyCharge: body.energyChargeP8,
        demandCharge: body.demandChargeP8,
        vca: body.vcaP8,
        electricityDuty: body.electricityDutyP8,
        cess: body.cessP8,
        meterRent: body.meterRentP8,
        currentSurcharge: body.currentSurchargeP8,
        currentMonthBill: body.currentMonthBillP8,
        arrearsExclSurcharge: body.arrearsExclSurchargeP8,
        sd: body.sdP8,
        otherCharge: body.otherChargeP8,
      },

      billServed: {
        date: body.billServedDateP8,
        sms: body.billServedSMSP8,
        email: body.billServedEmailP8,
        speedPost: body.billServedSpeedPostP8,
        other: body.billServedOtherP8,
      },

      remark: body.remarkP8,
    },

    // STEP 9
    assessment: {
      from: body.assessmentPeriodFrom,
      /* form: body.assesmeteprriodForm, */
      to: body.assessmentPeriodTo,
      units: body.unitsAssessed,
      amount: body.amountAssessed,
      penalty: body.penaltyAmount,
      total: body.totalDues,
      remarks: body.assessmentRemarks,
    },
  };
};


// TEST ROUTE
router.get("/test", (req, res) => {
  res.send("Route Working ");
});

// GET by BP Number
router.get("/:bpNumber", async (req, res) => {
  try {
    const data = await Report.findOne({ bpNumber: req.params.bpNumber });

    if (!data) {
      return res.status(404).send("No data found");
    }

    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});


// CREATE
router.post("/add", async (req, res) => {
  try {
    if (!req.body.bpNumber || req.body.bpNumber.trim() === "") { 
      return res.status(400).send("BP Number is required");
    }
  
    const data = new Report(req.body);
    await data.save();

    res.send("Report Saved");
  } catch (err) {
    res.status(500).send(err);
  }
}); 

// GET ALL
router.get("/", async (req, res) => { 
  const data = await Report.find();
  res.json(data);
});


module.exports = router;
