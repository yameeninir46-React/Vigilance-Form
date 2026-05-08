const mongoose = require("mongoose");

const step4Schema = new mongoose.Schema({
  //  Link with BP
  bpNumber: {
    type: String,
    required: true,
  },

  //  Document Attachments
  docSIR: String,              // (A1)
  docPanchname: String,       // (A2)
  docPraveshTalashi: String,  // (A3)
  docNajriNaksha: String,     // (A4)
  docWiringNaksha: String,    // (A5)
  docFormat2: String,         // (A6)
  docFormat3: String,         // (A7)
  docJaptiPatrak: String,     // (A8)
  docSupurdagiPatrak: String, // (A9)
  docOther: String,           // (A10)

  //  Remark
  remark: String,

}, { timestamps: true });

module.exports = mongoose.model("Step4", step4Schema);