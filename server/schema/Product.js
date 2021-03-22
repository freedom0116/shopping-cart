const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    _id: String,
    image: String,
    title: String,
    description: String,
    availableSizes: [String],
    price: Number,
    rating: Number,
    ratingDistribution: [Number]
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
