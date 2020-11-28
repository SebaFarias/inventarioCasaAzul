const jwt = require('jsonwebtoken')
const User = require('../models/user')

const validateUserName = async user => {
  const getUSerConfirm = await User.findOne( {username: user} )
  if(getUSerConfirm) return true
  return false
}
const validateEmail = async email => {
  const getEmailConfirm = await User.find( {username: email} )
  if(getEmailConfirm.length > 0){
    return true
  }
  return false

}

const userMethods = {
  login : async ( req , res ) => {
    const { email , password} = req.body
    const getUser = await User.findOne( {email: email} )

    if(getUser){
      const validatePassword = await getUser.confirmPassword(password)
      if(validatePassword){
        console.log(validatePassword)
      } else {
        return res.status(400).json({
          status: false ,
          type: "login" ,
          message: "Usuario o clave incorrecta",
        })
      } 
    } else {
      return res.status(400).json({
        status: false ,
        type: "login" ,
        message: "Usuario o clave incorrecta",
      })
    }
  },
  signin : async ( req , res ) => {
    const { username , email , password} = req.body

    const getUser = await validateUserName(username) 
    console.log(getUser)
    if(!getUser){
      const getEmail = await validateEmail(email) 
      console.log(getEmail)
      if(!getEmail){
        const newUser = new User({
          username,
          email,
          password,
        })

        newUser.password = await newUser.encryptPassword(newUser.password)
        if(newUser.save()){
          return res.status(201).json({
            status: true ,
            message: "Usuario registrado correctamente"
          })
        } else {
          return res.status(500).json({
            status: false,
            type: "register",
            message: "Hubo un error en el proceso",
          })
        }
      } else {
        return res.status(400).json({
          status: false,
          type: "email",
          message: "Este correo ya está en uso",
        })
      }
    } else {
      return res.status(400).json({
        status: false,
        type: "username",
        message: "Este usuario ya está en uso",
      })
    }
  },
}

module.exports = userMethods

