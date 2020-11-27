const itemMethods = {
  getItems: async ( req , res ) => {
    return res.json({
      status: true,
      message: "Todos los items de la casa"
    })
  },
  getItem: async ( req , res ) => {

  },
  createItem: async ( req , res ) => {

  },
  updateItem: async ( req , res ) => {

  },
  deleteItem: async ( req , res ) => {

  },
}

module.exports = itemMethods