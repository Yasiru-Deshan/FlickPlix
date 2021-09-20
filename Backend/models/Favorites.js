const mongoose = require('mongoose');

const FavoritesSchema = mongoose.Schema({
   userId: {
		type: String,
	},
    movie:{
        type: mongoose.Schema.Types.ObjectId,
		ref: 'Movie'
    }
});

module.exports = mongoose.model('Favorites',FavoritesSchema)