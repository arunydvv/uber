const mongoose = require('mongoose');

async function connectToMongo() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to DB');
    } catch (error) {
        console.error('Error connecting to DB:', error);
    }
}

module.exports = connectToMongo;


