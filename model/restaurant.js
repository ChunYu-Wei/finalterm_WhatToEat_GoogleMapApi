const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
	name: {
        type: String,
		required: [true, 'Name field is required.']
	},
	main_dish: {
		type: String,
		required: [true, 'Main dish field is required.']
    },
    price: {
        type: Number,
		required: [true, 'Price field is required.']
	},
	drink: {
		type:Boolean,
		required: [true, 'Drink field is required.']

	},
	distance:{
		type :Number,
		required:[true,'distance field is required.']
	},
	lat:{
		type :Number,
		required:[true,'lat field is required.']
	},
	lng:{
		type :Number,
		required:[true,'lng field is required.']
	}
})

const Restaurant = mongoose.model('Restaurant',RestaurantSchema);

module.exports = Restaurant;