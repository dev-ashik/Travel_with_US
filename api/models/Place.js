const mongoose = require('mongoose');

const PlaceSehema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    address: String,
    photos: [String],
    description: Sting,
    perks: [String],
    extraInfo: String,
    checkIn: Number,
    checkOut: Number,
    maxGuests: Number
})

const PlaceModel = mongoose.model('place', PlaceSehema);

module.exports = PlaceModel;