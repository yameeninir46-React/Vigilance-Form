const mongoose = require("mongoose");

const step9Schema = new mongoose.Schema({
  //  Link with BP
  bpNumber: {
    type: String,
    required: true,
  },

  //  Assessment of Loss
  assessmentPeriodFrom: Date,
  assessmentPeriodTo: Date,

  unitsAssessed: String,
  amountAssessed: String,
  penaltyAmount: String,
  totalDues: String,

  //  Remarks
  assessmentRemarks: String,

}, { timestamps: true });

module.exports = mongoose.model("Step9", step9Schema);