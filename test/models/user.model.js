const { Schema, default: mongoose } = require('mongoose')

const userSchema = new Schema({
  username: String,
})

const User = mongoose.model('User', userSchema)

module.exports = User
