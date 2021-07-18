import mongoose, { Schema } from 'mongoose';

const clasificationSchema = new Schema({
    name: { type: String},
});

const Clasification = mongoose.model('clasification', clasificationSchema);

export default Clasification;