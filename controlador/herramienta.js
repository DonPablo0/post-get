const herramienta = require('../modelo/herramienta')

const getHerramientas = async (req, res) => {
    //const {nombre_empleado, herramienta, cantidad} = req.query
    const herramientas = await herramienta.find()
    res.json({
        msg: 'herramientas get api',
        herramientas
    })
}
const postHerramientas = async (req, res) => {
    //desestructurazion
    const { nombre_herramienta, tipo, cantidad } = req.body
    //crear objeto
    const herramientas1 = new herramienta({ nombre_herramienta, tipo, cantidad })
    await herramientas1.save()

    res.json({
        msg: 'herramientas post api',
        herramientas1,
        "nombre_herramienta": "Taladro",
        "tipo": "Electrica",
        "cantidad": 12
    })
}

module.exports = {
    getHerramientas,
    postHerramientas
}