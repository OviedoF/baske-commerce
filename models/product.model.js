const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');

const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    },
    description: {
        type: Object
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceWithOffer: Number
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;