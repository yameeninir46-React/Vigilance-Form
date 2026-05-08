const mongoose = require("mongoose");

const step8Schema = new mongoose.Schema({
  //  Link with BP
  bpNumber: {
    type: String,
    required: true,
  },

  //  Final Billing
  finalBillDate: Date,
  finalBillAmount: String,
  kwhUnitsRaised: String,
  kvah: String,

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

  //  Remark
  remark: String,

}, { timestamps: true });

module.exports = mongoose.model("Step8", step8Schema);