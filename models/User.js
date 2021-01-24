const mongoose   = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    googleId : String
})

mongoose.model('users1', userSchema)