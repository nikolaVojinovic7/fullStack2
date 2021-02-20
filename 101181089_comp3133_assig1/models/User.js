const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: [true, "Duplicate username not allowed"]
    },
    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Duplicate Email Not allowed"],
        trim: true,
        uppercase: true,
        //Custom validation
        validate: function(value) {
            let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
