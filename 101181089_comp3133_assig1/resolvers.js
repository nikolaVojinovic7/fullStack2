const Hotel = require('./models/Hotel');
const User = require('./models/User')
const Booking = require('./models/Booking')

exports.resolvers = {
    Query: {
        getHotel: async (parent, args) => {
            return Hotel.find({});
        },
        getUser: async (parent, args) => {
            return User.find({});
        },
        getUserByEmail: async (parent, args) => {
            return Hotel.find({"email" : args.email});
        },
        getHotelByCity: async (parent, args) => {
            return Hotel.find({"city" : args.city});
        },
        getHotelByName: async (parent, args) => {
            return Hotel.find({"hotel_name" : args.hotel_name});
        },
        getBooking: async (parent, args) => {
            return Booking.find({});
        },
    },
    Mutation: {
        addHotel: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())
            const zipCodeExpression = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;
            const isValidZip = zipCodeExpression.test(String(args.postal_code.toUpperCase()))

            if(!isValidZip){
                throw new Error("Postal code is not of a proper format")
            }
            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newHotel = new Hotel({
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
            });
            return await newHotel.save();
        },
        addUser: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())

            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newUser = new User({
                username: args.username,
                password: args.password,
                email: args.email,
            });
            return await newUser.save();
        },
        addBooking: async (parent, args) => {
            const userCheck = await User.findOne({_id: args.user_id})
            const hotelCheck = await Hotel.findOne({_id: args.hotel_id})

            if(!userCheck){
                throw new Error(`User id ${args.user_id} is not registered in the database`)
            }

            if(!hotelCheck){
                throw new Error(`The hotel id ${args.hotel_id} is not registered in the database`)
            }
            console.log(args)

            let newBooking = new Booking({
                user_id: args.user_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                hotel_id: args.hotel_id,
            });
            return await newBooking.save();
        },
    }
}
