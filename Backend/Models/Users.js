const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlenght:30
    },

    age: {
        type: Number,
        maxlenght: 3
    },
    phone: {
        type: Number,
        required: true,
        minlength:10,
       maxlenght: 15

    }, 
    profileImage:{
        data: Buffer,
        contentType: String
    }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;

