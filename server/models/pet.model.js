const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "A name is required."],
        minlength: [3, "The name must be at least 3 characters long."]
    },
    type: {
        type: String,
        required: [true, "A type is required."],
        minlength: [3, "The type must be at least 3 characters long."]
    },
    description: {
        type: String,
        required: [true, "A description is required."],
        minlength: [3, "The description must be at least 3 characters long."]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);

