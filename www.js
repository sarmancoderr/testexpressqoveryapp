const app = require('.')
const http = require('http')

const PORT = process.env.PORT || 9000

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto ' + PORT)
})