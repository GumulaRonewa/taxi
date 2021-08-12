const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  Province: {type: String, required:true},
  City: {type: String, required:true},
  from: {type: String, required:true},
  to: {type: String, required:true},
  price: {type: String, required:true},




});

const post = mongoose.model('routes', locationSchema);

module.exports = post;
