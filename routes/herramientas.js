const { Router } = require('express')
const router = Router()

const { getHerramientas, postHerramientas } = require('../controlador/herramienta')

router.get('/', getHerramientas)

router.post('/', postHerramientas)

module.exports = router