const mongoose = require('mongoose')

const praiaSchema = new mongoose.Schema({

    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: { type: String,required: true },
    distanciaKm: { type: Number, required: true },
    passaVan: { type: Boolean, required: true },
    precoReal: { type: Number, required: true },
    gostou: { type: Boolean, required: true },

})// , { timestamps: true }) - registro temporal 

const Model = mongoose.model('praias', praiaSchema)

module.exports = Model