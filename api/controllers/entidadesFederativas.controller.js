const {EntidadFederativa} = require('../models/academico.model');
const Modelo = EntidadFederativa;
const text = "la Entidad Federativa"
const BitacoraController = require("./bitacora.controller");

async function create(req, res) {
  try {
    const nuevo = new Modelo(req.body);
    const saved = await nuevo.save();
  if(saved){
      BitacoraController.registrar("registro "+text+" con id: "+saved._id, req.usuario.id);
    }
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error al guardar '+text+':', error);
    res.status(500).json({ error: 'Ocurrió un error al guardar '+text });
  }
};

async function readAll  (req, res) {
  const all = await Modelo.find();
  return res.status(200).json(all);
}

async function read1(req, res){
  const { id } = req.params;
  const prospecto = await Modelo.findById(id);
  return res.status(200).json(prospecto);
}

async function update(req, res){
  try {
    const { id } = req.params;
    const updated = await Modelo.findByIdAndUpdate(id, req.body);
  if(updated){
      BitacoraController.registrar("registro "+text+" con id: "+updated._id, req.usuario.id);
    }
    res.status(201).json(updated);
  } catch (error) {
    console.error('Error al guardar '+text+':', error);
    res.status(500).json({ error: 'Ocurrió un error al guardar '+text });
  }
}

async function del(req, res){
  try {
    const { id } = req.params;
    const deleted = await Modelo.findByIdAndDelete(id);
  if(deleted){
      BitacoraController.registrar("registro "+text+" con id: "+deleted._id, req.usuario.id);
    }
    res.status(201).json(deleted);
  } catch (error) {
    console.error('Error al guardar '+text+':', error);
    res.status(500).json({ error: 'Ocurrió un error al guardar '+text });
  }
}

module.exports={
  create,
  readAll,
  read1,
  update,
  del
}