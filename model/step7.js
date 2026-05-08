const mongoose = require("mongoose");

const step7Schema = new mongoose.Schema({
  //  Link with BP
  bpNumber: {
    type: String,
    required: true,
  },

  //  Provisional Billing
  provisionalBillDate: Date,
  provisionalBillAmount: String,
  kwhUnitsRaised: String,

  //  Charges Breakdown
  charges: {
    energyCharge: String,
    demandCharge: String,
    vca: String,
    electricityDuty: String,
    cess: String,
    meterRent: String,
    currentSurcharge: String,
    currentMonthBill: String,
    arrearsExclSurcharge: String,
    sd: String,
    otherCharge: String,
  },

  //  Bill Served Details
  billServed: {
    date: Date,
    sms: String,
    email: String,
    speedPost: String,
    other: String,
  },

  // Remark
  remark: String,

}, { timestamps: true });

module.exports = mongoose.model("Step7", step7Schema);