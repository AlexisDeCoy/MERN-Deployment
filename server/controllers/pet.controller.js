const { Pet } = require('../models/pet.model');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello, this is the mern belt!"
    });
}

module.exports.getAllPets = (request, response) => {
    Pet.find({}).collation({locale: "en" }).sort({ type: 1})
        .then(pets => response.json(pets))
        .catch(err => response.status(400).json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err))
}

module.exports.createPet = (request, response) => {
    const { petName, type, description, skill1, skill2, skill3 } = request.body;
    Pet.create({
        petName,
        type,
        description,
        skill1,
        skill2,
        skill3
    })
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err));
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators: true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}


