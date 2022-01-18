const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public')) //carrega arquivos estáticos como imgs, css, javascript

server.set('views', path.join(__dirname, 'views'))

server.use(route)

server.listen(3000, () => console.log('rodando'))
