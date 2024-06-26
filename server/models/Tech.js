const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true, // does this have to be true? Can't multiple authors have books titled the same??
  },
});

const User = model('Tech', techSchema);

module.exports = Tech;
