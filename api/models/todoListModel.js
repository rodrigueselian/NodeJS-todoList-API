'use strict';
const mongoose = require('mongoose')
var Scheema = mongoose.Schema

var TaskScheema = new Scheema({
    name: {
        type: String,
        required: 'Coe a tarefa ae meu parca'
      },
    Created_date: {
        type: Date,
        default: Date.now
      },
    status: {
        type: [{
          type: String,
          enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
      }
})

module.exports = mongoose.model('Tasks', TaskScheema)