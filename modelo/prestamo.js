const { Schema, model} = require('mongoose')

const prestamoSchema = Schema({
    nombre_empleado: {
        type: String
    },
    herramienta: {
        type: String
    },
    cantidad: {
        type: Number
    }
})
module.exports = model('prestamo', prestamoSchema)