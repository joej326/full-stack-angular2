const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

let schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true}, // to use unique: npm install --save mongoose-unique-validator :: also use the plugin method below
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}] // note we are using an array to notify mongoose we're using multiple messages
});                                       // ref connects one mongoose model to another. Needs to be added to both to make the connection!

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
