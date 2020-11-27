require('dotenv').config()
const mongoose = require('mongoose')
const db = mongoose.connection

const uri = process.env.DBURI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect( uri , options)
  .then(() => console.log('connected to database'))
  .catch( e => console.error('DB error:', e ))
