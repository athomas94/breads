const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about Breads')
})

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Mongo connection
mongoose.connect(process.env.MONGO_URI).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))

//Controllers
const breadsController = require('./controllers/breads_controllers')
app.use('/breads', breadsController)

const bakersController = require('./controllers/bakers_controller')
app.use('/bakers', bakersController)

//404
app.get('*', (req, res) => {
    res.status(404).send('404')
})

//LISTENERS
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})