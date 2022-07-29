
const controller = require('../controllers/praiasController')

const express = require('express')

const router = express.Router()

router.get('/praias', controller.getTodasPraias)
router.get('/praiaporid', controller.getPraiaId)
router.put('/atualizar', controller.atualizarPraia)
router.post('/new', controller.createPraia)
router.delete('/delete', controller.deletePraia)

module.exports = router