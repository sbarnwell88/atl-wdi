//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//create your donut schema:
var donutSchema = new Schema({
    name: String,
    description: String,
    img: { data: Buffer, contentType: String },
    price: Number,
    qty: Number
});

{
    name: "Chocolate Donut",
    description: "I am a chocolate donut.",
    img: "http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png",
    price: 5,
    qty: 99
}

//export your donut with module.exports()
module.exports = {
  User: UserModel,
  Item: ItemModel
};