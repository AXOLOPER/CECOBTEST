const mongoose = require('mongoose');

const grupoSchema = new mongoose.Schema({
  Clave: {type:String},
  Nombre: { type: String },
  Numero: { type: Number },
  Simbolo: { type: String },
  Status:{type:Boolean, default:true},
});

const Grupo = mongoose.model('Grupo', grupoSchema);

module.exports = {
  Grupo
};