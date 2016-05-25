var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var gabSchema = new Schema({
  creator : { type: String, ref: 'User' },
  title    : String,
  gab_body : String,
  comments :[{content: 'string'}],
  recipient : { type: String, ref: 'User' }
});

var Gab  = mongoose.model('Gab', gabSchema);

module.exports = Gab;
