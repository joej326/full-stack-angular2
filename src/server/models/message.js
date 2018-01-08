const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
  content: {type: String, required: true}, // these two are mongoose syntax
  user: {type: Schema.Types.ObjectId, ref: 'User'} // mongoose's way of creating id's for our objects
});


module.exports = mongoose.model('Message', schema);
