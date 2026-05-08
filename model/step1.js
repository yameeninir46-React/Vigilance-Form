const mongoose = require("mongoose");

const step1Schema = new mongoose.Schema({
  // 🔑 Unique BP Number
  bpNumber: {
    type: String,
    required: true,
    unique: true,
  },

  // 👤 Consumer Details
  consumerName: String,
  mobile: String,
  email: String,
  address: String,

  // 📍 Location
  coordinates: {
    lat: Number,
    lng: Number,
  },

  // ⚡ Electrical Details
  categoryTariff: String,
  dcZone: String,
  division: String,
  circle: String,
  agreementLoad: String,
  lastReadingSAP: String,

  //  Multiplying Factor
  multiplyingFactor: {
    asFound: String,
    asBilled: String,
  },

  // 🔌 Connection
  connectionType: {
    type: String,
    enum: ["LT", "HT"],
  },

}, { timestamps: true });

module.exports = mongoose.model("Step1", step1Schema);