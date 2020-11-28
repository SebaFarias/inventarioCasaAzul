const express = require('express')
const router = express.Router()
const { login , signin } = require('../controllers/user')

router
  .post('/login' , login )
  .post('/signin' , signin )

module.exports = router