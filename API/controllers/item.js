const { Item } = require('../models/item') 

const itemMethods = {
  getItems: async ( req , res ) => {
    try{
      const items = await Item.Find()
      if(items.length > 0){
        res.json({
          status: true,
          message: "Todos los items de la casa",
          data: items
        })
      } else {
        res.status(404).json({
          message: "No existen items en el Inventario",
        })
      }
    }
    catch(err){
      res.status(400).json({error: err})
    }
  },
  getItem: async ( req , res ) => {
    const { itemID } = req.params
    const requestedItem = await Item.findOne({ id: itemID})
    if(requestedItem.length > 0){
      res.json({
        nombre: requestedItem.nombre,
        estado: requestedItem.estado,
        lugarFisico: requestedItem.lugarFisico,
        descripcion: requestedItem.descripcion,
        destino: requestedItem.destino,
        valorEstimado: requestedItem.valorEstimado,
        valorFinal: requestedItem.valorFinal,
        categorias: requestedItem.categorias,
        pendiente: requestedItem.pendiente,
        updated_at: requestedItem.updated_at,
        created_at: requestedItem.created_at,
      })
    } else {
      res.status(404).json({
        message: "El Item solicitado no se encuentra en nuestros registros 🤷‍♀️"
      })
    }
  },
  createItem: async ( req , res ) => {
    const { 
      nombre,
      estado,
      lugarFisico,
      descripcion,
      destino,
      valorEstimado,
      valorFinal,
      categorias,
      pendiente,
    } = req.body
    if( nombre && estado && lugarFisico){
      try{
        const newItem = new Item({
          nombre: nombre,
          estado: estado,
          lugarFisico: lugarFisico,
          descripcion: descripcion,
          destino: destino,
          valorEstimado: valorEstimado,
          valorFinal: valorFinal,
          categorias: categorias,
          pendiente: pendiente,
          created_at: new Date(),
          updated_at: new Date(),
        })
        await newItem.save()
        res.status(201).json({
          message: "Item agregado correctamente",
          data: newItem,
        }) 
      }
      catch(err){
        res.status(400).json({error: err})
      }
    } else {
      res.status(400).json({message: "Hay campos obligatorios que están vacíos"})
    }
  },
  updateItem: async ( req , res ) => {

  },
  deleteItem: async ( req , res ) => {

  },
}

module.exports = itemMethods