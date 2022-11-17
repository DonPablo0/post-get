const { Router } = require('express')
const router = Router()

const { getPrestamos, postPrestamos, deletePrestamos, putPrestamos, patchPrestamos } = require('../controlador/prestamo')

router.get('/', getPrestamos)

router.post('/', postPrestamos)

router.delete('/', deletePrestamos)

router.put('/', putPrestamos)

router.patch('/', patchPrestamos)

module.exports = router