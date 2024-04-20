const mongose = require('mongoose');
const Schema = mongose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    shares: [{
        type: Schema.Types.ObjectId,
        ref: 'Share',
    }]
});