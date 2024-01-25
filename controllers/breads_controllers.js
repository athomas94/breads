const express = require ('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', (req,res) => {
    res.render('Index', 
    {
        breads: Bread,
        title: 'Index Page'
    })
})

breads.get('/:arrayIndex', (req, res) => {
   if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex]
    })
} else {
    res.send('404')
}
})

//CREATE
breads.post ('/', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')
})

module.exports = breads