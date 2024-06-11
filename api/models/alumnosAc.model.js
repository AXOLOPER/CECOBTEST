const mongoose = require('mongoose');

const CalumnoSchema = new mongoose.Schema({
  Matricula: { type: String, required: true },
  ASPIRANTE: { type: mongoose.Types.ObjectId, required: true, ref: "Aspirantes"},
  Status: { type: Boolean, default: true },
},{timestamps:true});

const CuentaAlumno = mongoose.model('CuentaAlumno', CalumnoSchema);

module.exports = CuentaAlumno;