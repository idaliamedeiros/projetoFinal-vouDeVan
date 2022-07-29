const users = require('../models/usersModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET
dotenv = require('dotenv').config


const create = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
  req.body.senha = senhaComHash

  const user = new users(req.body)

  user.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.status(201).send(user)
  })
}

const login = (req, res) => {
  users.findOne({ email: req.body.email }, function (error, user) {
    if (error) {
      return res.status(500).send({ message: "message invalid authorization" })
    }
    if (!user) {
      res.status(404).send(`There is no user with this email: ${req.body.email}`)
    }

    const senhaValida = bcrypt.compareSync(req.body.senha, user.senha)

    if (!senhaValida) {
      res.status(403).send('Invalid password')
    }

    const token = jwt.sign({ email: req.body.email }, SECRET)
    return res.status(200).json({ token })
  })

}




module.exports = {
  create,
  login
}