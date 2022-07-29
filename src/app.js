require('dotenv-safe').config()
const index = require('./routes/index')
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const praias = require('./routes/praiasRoutes')
const app = express()
const usersRoutes = require('./routes/usersRoutes');

app.use(cors())
app.use(express.json())
app.use("/users", usersRoutes);
app.use("/", index)
app.use("/", praias)
mongoose.connect()


//const swaggerFile = require("../swagger/swagger_output.json");
//const swaggerUi = require("swagger-ui-express");

//app.use("/minha-documentação", swaggerUi.serve, swaggerUi.setup(swaggerFile));


module.exports = app