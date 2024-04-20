const mongose = require('mongoose');
const Schema = mongose.Schema;



const shareSchema = new Schema({
  landId: { type: Schema.Types.ObjectId, ref: 'Land', required: true },
  price: { type: Number, required: true },
  percentage: { type: Number, required: true}
});


const propertySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    size: { type: Number, required: true },
    whyInvest: { type: String, required: true },
    tenancy: {  about: { type: String, required: true },
               leaseDetails: { type: String, required: true } },
    calculator: { estimatedRent: { type: Number },
                 expectedResaleValue: { type: Number }},
    landId: { type: Schema.Types.ObjectId, ref: 'Land', required: true },             
    shares :[{
      type: Schema.Types.ObjectId,
       ref:'Share', 
       }]

});


module.exports = mongose.model('Property', propertySchema);
