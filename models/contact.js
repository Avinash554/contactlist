const mongoose = require('mongoose');// we can use const or let or schema as it requires to you.

const ContactSchema = mongoose.Schema({
    first_name : {
        type: String,
        required: true
    },
    last_name :{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);
