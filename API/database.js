require('dotenv').config()
const mongoose = require('mongoose')

const uri = process.env.DBURI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect( uri , options)
  .then(() => console.log('conectado a la base de datos de la Casa Azul'))
  .catch( e => console.error('DB error:', e ))
