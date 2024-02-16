// inclure les dépendances et middlewares 
const express = require('express') 
const mysql = require('mysql')
const http = require('http')
var cors = require('cors')
const Routeur = require('./routes/route')

// activation des dépendances 
let app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Définition du port de l'application  
const port = process.env.port || 3000

app.use('/', Routeur);

// DÉMARRAGE DE L'APPLICATION
app.listen(port, () => {
    console.log(`Serveur HTTP fonctionnel. Go http://localhost:${port}`)
  })

/*app.listen(process.env.ALWAYSDATA_HTTPD_PORT, process.env.ALWAYSDATA_HTTPD_IP, () => {
  console.log(`Serveur HTTP fonctionnel !`)
})*/

module.exports = app