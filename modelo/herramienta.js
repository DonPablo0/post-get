const { Schema, model} = require('mongoose')

const herramientaSchema = Schema({
    nombre_herramienta: {
        type: String
    },
    tipo: {
        type: String
    },
    cantidad: {
        type: Number
    }
})
module.exports = model('herramienta', herramientaSchema)