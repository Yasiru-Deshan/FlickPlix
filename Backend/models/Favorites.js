const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ItemSchema = new Schema({
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
    },
}, 
)

const CartSchema = new Schema({
    items: [ItemSchema],
   
}, 
)
module.exports = mongoose.model('favMovies', CartSchema);