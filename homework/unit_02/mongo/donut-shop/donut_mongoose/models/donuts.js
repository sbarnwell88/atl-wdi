//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//create your donut schema:
var donutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

donutSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var donutModel = mongoose.model("Donuts", donutSchema);

//export your donut with module.exports()
module.exports = {
  Donuts: donutModel
};