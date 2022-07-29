const praiasModel = require('../models/praiasModel')
const SECRET = process.env.SECRET



const getTodasPraias = async (req, res) => {
    try {
        const todasPraias = await praiasModel.find()
        res.status(200).json(todasPraias)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getPraiaId = async (req, res) => {
    try {
        const findPraia = await praiasModel.findById(req.params.id)
        res.status(200).json(findPraia)

    } catch (error) {
        res.status(500).json({ message: error.message })
        console.error(error)
    }
};

const atualizarPraia = async (req, res) => {
    try {
        const { id } = req.params
        const findPraia = await praiasModel.findById(id)

        if (findPraia.passaVan == false) {
            findPraia.passaVan = true
        } else {
            findPraia.passaVan = false
        }

        savedPraia = await findPraia.save()
        res.status(200).json({ message: "Dado alterado com sucesso!", savedPraia })
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.error(error)
    }
}

const createPraia = async (req, res) => {
    try {
        const { nome, distanciaKm, passaVan, precoReal, gostou } = req.body

        const newPraia = new praiasModel({
            nome, distanciaKm, passaVan, precoReal, gostou
        })

        const savedPraia = await newPraia.save()

        res.status(201).json(savedPraia)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
};

const deletePraia = async (req, res) => {
    try {
        const { id } = req.params
        await praiasModel.findByIdAndDelete(req.params.id)
        const message = `Praia ${id}, foi removida!`

        res.status(200).json(message)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getTodasPraias,
    getPraiaId,
    atualizarPraia,
    createPraia,
    deletePraia
}