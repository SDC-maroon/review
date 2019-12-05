const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  rating: Number,
  reviewTitle: String,
  reviewBody: String,
  reviewAuthor: String,
  reviewDate: String,
});

const productSchema = new mongoose.Schema({
  productID: Number,
  reviews: [reviewSchema],
});

module.exports.reviewModel = mongoose.model('Review', reviewSchema);
module.exports.productModel = mongoose.model('Product', productSchema);
