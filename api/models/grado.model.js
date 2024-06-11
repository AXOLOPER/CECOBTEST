const mongoose = require('mongoose');

const gradoSchema = new mongoose.Schema({
  Nombre:{type:String},
  Numero:{type:Number},
  Simbolo:{type:String},
  Status:{type:Boolean, default:true},
});

const Grado = mongoose.model('Grado', gradoSchema);

module.exports = {
  Grado
};