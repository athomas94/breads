const express = require('express')

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

const breadsController = require('./controllers/breads_controllers')
app.use('/breads', breadsController)

//404
app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})