const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const itemSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  estado: {
    type: String,
    required: true,
  },
  lugarFisico: {
    type: String,
    required: true,
  },
  descripcion: String,
  destino: String,
  valorEstimado: Number,
  valorFinal: Number,
  categorias: [String],
  pendiente: [String],
  updated_at: {
    type: Date,
    default: null,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
},{
  timestamps: true,
  versionKey: false,
})

module.exports = mongoose.model( 'Item' , itemSchema)