const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     hotel_id: ID!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
   }
   
   type Booking{
      booking_id: ID!
      user_id: ID!
      booking_date: String!
      booking_start: String!
      booking_end: String!
      hotel_id: ID!
   }
   
   type User {
     user_id: ID!
     username: String!
     password: String!
     email: String!
   }

   type Query {
     getHotel: [Hotel]
     getHotelByCity(city: String!): [Hotel]
     getHotelByName(hotel_name: String!): [Hotel]
     getUser: [User]
     getBooking: [Booking]
     getUserByEmail(email: String!): [User]
   }

   type Mutation {
     addHotel(
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!): Hotel
     
     addUser(
        username: String!
        password: String!
        email: String!): User
        
     addBooking(
        user_id: ID!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        hotel_id: ID!): Booking   
   }
`
