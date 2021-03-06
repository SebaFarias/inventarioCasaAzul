const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const itemSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  estado: String,
  // {
  //   type: String,
  //   required: true,
  // },
  lugarFisico: String,
  // {
  //   type: String,
  //   required: true,
  // },
  descripcion: String,
  destino: String,
  valorEstimado: Number,
  valorFinal: Number,
  categorias: [String],
  pendiente: [String],
},{
  timestamps: true,
  versionKey: false,
})

module.exports = mongoose.model( 'Item' , itemSchema)