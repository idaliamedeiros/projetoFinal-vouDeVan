const praiasModel = require('../models/praiasModel')
const SECRET = process.env.SECRET

const getTodasPraias = async (request, response) => {
    try {
        const todasPraias = await praiasModel.find()
        response.status(200).json(todasPraias)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

const getPraiaId = async (request, response) => {

    const {id} = request.params
    
    try{
        const findPraia = await praiasModel.findById(id)
        if (findPraia == null) {
            return response.status(404).json({ message: "Inválido." })
    } 
        response.status(200).json(findPraia)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const atualizarPraia = (request, response) => {
    try {
        const idRequest = request.params.id
        let upResquest = request.body

        let praiaEncontrada = praias.findIndex(praia => praia.id == idRequest)
        praias.splice(praiaEncontrada, 1, upResquest)

        response.status(201).json({
            message: "Atualizada!",
            praias
        })
    } catch (err) {
        response.status(500).send({
            message: "Não atualizou!"
        })
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

const deletePraia = (request, response) => {
    try {
        const idRequest = request.params.id
        const indexPraia = praias.findIndex(praia => praia.id == idRequest)

        praias.splice(indexPraia, 1)

        response.status(200).send({
            messagem: "Deletada com sucesso. Tchau praia.",
            praias
        })
    } catch (err) {
        response.status(400).send({
            message: "Não foi possível deletar."
        })
    }
}

module.exports = {
    getTodasPraias,
    getPraiaId,
    atualizarPraia,
    createPraia,
    deletePraia
}
