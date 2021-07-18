import mongoose, { Schema } from 'mongoose';

const moviesSchema = new Schema({
    name: { type: String},
    director: { type: String},
    clasification: { type: Schema.ObjectId, ref: "clasification" }
});

const Movie = mongoose.model('movie', moviesSchema);

export default Movie;