const mongoose = require('mongoose')
const { Schema } = mongoose

//Create Schema
const breadSchema = new Schema ({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500/png' },
  baker: {
    type: String,
    enum: [ 'Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
})

//Model Creation and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread