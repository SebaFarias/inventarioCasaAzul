const  Item  = require('../models/item')

const itemMethods = {
  getItems: async ( req , res ) => {
    try{
      const items = await Item.find()
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
    const requestedItem = await Item.findById(itemID)
    if(requestedItem){
      res.json({
        id: requestedItem._id,
        nombre: requestedItem.nombre,
        estado: requestedItem.estado,
        lugarFisico: requestedItem.lugarFisico,
        descripcion: requestedItem.descripcion,
        destino: requestedItem.destino,
        valorEstimado: requestedItem.valorEstimado,
        valorFinal: requestedItem.valorFinal,
        categorias: requestedItem.categorias,
        pendiente: requestedItem.pendiente,
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
    const { itemID } = req.params
    try{
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
      const update =  {
        nombre: nombre,
        estado: estado,
        lugarFisico: lugarFisico,
        descripcion: descripcion,
        destino: destino,
        valorEstimado: valorEstimado,
        valorFinal: valorFinal,
        categorias: categorias,
        pendiente: pendiente,
      }
      const options = {}
      const itemModificado = Item.findByIdAndUpdate(itemID,update,options,(err,docs)=>{
        if(err){
          res.status(400).json({error: err})
        } else {
          res.status(200).json({
            message: "Item modificado correctamente",
            data: docs,
          }) 
        }
      })
    }
    catch(err){

    }    
  },
  deleteItem: async ( req , res ) => {
    const { itemID } = req.params
    try{
      await Item.findByIdAndRemove(itemID)
      res.status(200).json({
        message: "Item eliminado con éxito de los registros",
      })
    } 
    catch(err){
      res.status(400).json({error: err})
    }
  },
}

module.exports = itemMethods