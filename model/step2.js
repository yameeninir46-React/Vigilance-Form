const mongoose = require("mongoose");

const step2Schema = new mongoose.Schema({
  //  Link with Step1
  bpNumber: {
    type: String,
    required: true,
  },

  //  Officer Details
  employeeNumber: String,
  officerName: String,
  designation: String,
  divisionName: String,
  mobile: String,
  email: String,
  teamDetails: String,

}, { timestamps: true });

module.exports = mongoose.model("Step2", step2Schema);