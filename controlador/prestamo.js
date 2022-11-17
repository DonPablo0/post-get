const prestamo = require('../modelo/prestamo')

const getPrestamos = async (req, res) => {
    //const {nombre_empleado, herramienta, cantidad} = req.query
    const prestamos = await prestamo.find()
    res.json({
        msg: 'prestamo get api',
        prestamos
    })
}
const postPrestamos = async (req, res) => {
    //desestructurazion
    const { nombre_empleado, herramienta, cantidad } = req.body
    //crear objeto
    const prestamo1 = new prestamo({ nombre_empleado, herramienta, cantidad })
    await prestamo1.save()

    res.json({
        msg: 'prestamo post api',
        prestamo1
    })
}
       

const deletePrestamos = async (req, res) => {
    //desestructurazion
    const { nombre_empleado } = req.body
    //crear objeto
    const prestamo1 = await prestamo.findOneAndDelete({ nombre_empleado: nombre_empleado })

    res.json({
        msg: 'prestamo delete api',
        prestamo1
    })
}

const putPrestamos = async (req, res) => {
    //desestructurazion
    const { nombre_empleado, herramienta, cantidad } = req.body
    //crear objeto
    const prestamo1 = await prestamo.findOneAndUpdate({ nombre_empleado: nombre_empleado },{herramienta : herramienta , cantidad : cantidad})

    res.json({
        msg: 'prestamo put api',
        prestamo1
    })
}

const patchPrestamos = async (req, res) => {
    //desestructurazion
    const { nombre_empleado, herramienta } = req.body
    //crear objeto
    const prestamo1 = await prestamo.findOneAndUpdate({ nombre_empleado: nombre_empleado },{herramienta : herramienta})

    res.json({
        msg: 'prestamo patch api',
        prestamo1
    })
}

module.exports = {
    getPrestamos,
    postPrestamos,
    deletePrestamos,
    putPrestamos,
    patchPrestamos
}