const express = require('express')
const router = express.Router()
const { 
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem, 
} = require('../controllers/item')

router
  .get('/getItem/:itemID' , getItem)
  .get('/getItems' , getItems)
  .put('/createItem' , createItem)
  .post('/updateItem' , updateItem)
  .delete('/deleteItem' , deleteItem)

module.exports = router