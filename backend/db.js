const mongoose = require('mongoose');
// const mongooseURI = 'mongodb://localhost:27017/homesandhorizon?authMechanism=DEFAULT';
const mongooseURI = 'mongodb+srv://akhladubada1:Akhlad123@cluster0.pse4xga.mongodb.net/';

const connectToMongoose = async () => {
    try {
        await mongoose.connect(mongooseURI);
        console.log("Mongoose is connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongoose;
