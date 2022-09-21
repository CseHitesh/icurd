const mongoose = require('mongoose');

const connectToMongo = () => {

    //getting all the secret details from .env file
    const { USERNAME, PASSWORD, DATABASENAME } = process.env
    const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bulhrac.mongodb.net/${DATABASENAME}?retryWrites=true&w=majority`

    mongoose.connect(URI).then(success => console.log(' connected with db successfully'))
}

module.exports = connectToMongo;





