const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    email:{type: String, unique: true, required: true, lowercase: true},
    senha:{type: String},
},
{
    versionKey:false

})

const users = mongoose.model('users',usersSchema)

module.exports= users