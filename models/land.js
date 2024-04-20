const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const landSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    image: [ {type: String, required: true }],
    size: { type: Number, required: true },
    whyInvest: { type: String, required: true },
    isApproved: { type: Boolean, default: false }
   
});

module.exports = mongoose.model('Land', landSchema);