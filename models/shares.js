const mongose = require('mongoose');
const Schema = mongose.Schema;



const shareSchema = new Schema({
    landId: { type: Schema.Types.ObjectId, ref: 'Land', required: true },
    propertyId:{type: Schema.Types.ObjectId, ref: 'Property', required: true},
    price: { type: Number, required: true },
    percentage: { type: Number, required: true},
    userId:{type:Schema.Types.ObjectId, ref:'User'}
  });

  module.exports = mongose.model('Share', shareSchema);