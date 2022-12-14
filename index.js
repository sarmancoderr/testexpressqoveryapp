const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('/')
  res.end('Hola mundo')
})

app.get('/saludo', (req, res) => {
  console.log('/saludo')
  res.end('otro saludo ' + process.env.DB_URL)
})

module.exports = app