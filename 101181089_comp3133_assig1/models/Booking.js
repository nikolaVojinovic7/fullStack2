const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const BookingSchema = new mongoose.Schema({
    user_id: {
        type: ObjectId,
        required: true,
        trim: true,
        lowercase: true,
    },
    booking_date: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    booking_start: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    booking_end: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    hotel_id: {
        type: ObjectId,
        required: true,
        trim: true,
        lowercase: true,
    },
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;
