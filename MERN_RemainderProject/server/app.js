const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const app = express()
const router = require("./src/router/allRouter")


app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use("/register/setRemainder", router)


module.exports = app