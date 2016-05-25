var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var userSchema = new Schema({
  name    : String,
  email   : String,
  password: String,
  gabs : [{ type: Schema.Types.ObjectId, ref: 'Gab' }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
