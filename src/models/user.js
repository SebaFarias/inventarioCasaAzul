const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
mongoose.set('useFindAndModify', false);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date()
  },
},{
  timestamps: true,
  versionKey: false,
})

userSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password , salt)
}

userSchema.methods.confirmPassword = password => {
  return bcrypt.compare(password , this.password)
}
module.exports = mongoose.model( 'User' , userSchema)