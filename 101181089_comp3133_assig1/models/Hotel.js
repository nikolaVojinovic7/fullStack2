const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    hotel_name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: [true, "Duplicate hotel name not allowed"]
    },
    street: {
        type: String,
        required: true,
        unique: [true, "Duplicate street not allowed"],
        trim: true,
        uppercase: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    postal_code:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: [true, "Duplicate zip code not allowed"]
    },
    price: {
        type: Number,
        default: 0.0,
        required: true,
        trim: true,
        lowercase: true,
        min: 0.0,
        validate(value) {
            if (value < 0.0){
                throw new Error("Negative Prices aren't real.");
            }
        }
    },
    email: {
        type: String,
        required: true,
        //index: true, //Optional if unique is defined
        unique: [true, "Duplicate Email Not allowed"],
        trim: true,
        uppercase: true,
        //minlength:10,
        //maxlength: 50,
        //Custom validation
        validate: function(value) {
            let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
});

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;
