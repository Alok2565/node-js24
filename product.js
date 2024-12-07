const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category:String

});
// const Product = mongoose.model("Products", productSchema);
module.exports = mongoose.model("Products", productSchema);