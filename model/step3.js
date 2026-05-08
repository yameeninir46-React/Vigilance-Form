const mongoose = require("mongoose");

const step3Schema = new mongoose.Schema({
  //  Link with BP
  bpNumber: {
    type: String,
    required: true,
  },

  // 📄 SIR Details
  dateOfChecking: Date,
  sirNumber: String,

  //  Meter Details
  meterDetails: String,
  pulseKwh: String,
  loadAsFound: String,
  reading: String,
  tariffCategoryFound: String,
  purpose: String,

  //  Meter Load Test
  meterLoadTest: {
    singlePhase: String,   // e.g. Normal
    threePhase: String,    // e.g. Normal
  },

}, { timestamps: true });

module.exports = mongoose.model("Step3", step3Schema);