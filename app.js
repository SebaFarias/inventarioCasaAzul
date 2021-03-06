const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
// const path = require('path')
const itemRoutes = require('./src/routes/item')
const userRoutes = require('./src/routes/user')
const app = express()

// //Configura la static path 
// app.set(express.static(path.join(__dirname,'assets')))

//Configura los headers
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())
app.use(express.json())

//Configura rutas
app.use( '/items' , itemRoutes)
app.use( '/user' , userRoutes)
app.get('/', (req,res) => {
    res.json({msg: 'Estamos Funcionando!'})
})

module.exports = app

