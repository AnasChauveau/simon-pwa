const express = require('express')
let app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const routeur = express.Router()


// Ajout des controllers //
const ctrl = require('../controllers/controller')

routeur.get('/', ctrl.getDate)


// Exportation //
module.exports = routeur