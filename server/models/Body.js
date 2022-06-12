const { Schema, model } = require('mongoose');

const bodySchema = new Schema(
  {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    type: {
      type: String,
      require: true
    },
    age: {
      type: String,
      require: true
    },
    dist: {
      type: String,
      require: true
    },
    year: {
      type: String,
      require: true
    },
    sake: {
      type: String,
      require: true
    },
    temp: {
      type: String,
      require: true
    },
    
  }
);

const Body = model('Body', bodySchema);

module.exports = Body;