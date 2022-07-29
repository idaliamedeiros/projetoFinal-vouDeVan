
const controller = require('../controllers/praiasController')
const express = require('express')

const router = express.Router()

router.get('/praias', controller.getTodasPraias)
router.get('/praia/:id', controller.getPraiaId)
router.patch('/atualizar/:id', controller.atualizarPraia)
router.post('/novapraia', controller.createPraia)
router.delete('/delete/:id', controller.deletePraia)

module.exports = router