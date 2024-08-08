// File to handle all the routes and perform necessary CRUD operation using 'controller.js'

const express = require('express')
const controller = require('./controller.js')
const route = express.Router()

route.get('/', controller.general)

route.post('/register', controller.createStudent)

route.get('/view', controller.viewAll)

route.put('/update/:id', controller.update)

route.delete('/delete/:id' ,controller.deleteStudent)

module.exports = route