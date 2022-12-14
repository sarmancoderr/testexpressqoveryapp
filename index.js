const express = require('express')
const http = require('http')

const PORT = process.env.PORT || 9000

const app = express()

app.get('/', (req, res) => {
  res.end('Hola mundo')
})

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto ' + PORT)
})