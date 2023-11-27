const mongoose = require('mongoose')

//? Definir Un Modelo Solo Para Mongo

const reviewsSchema = new mongoose.Schema({
    title: {
        type: String,
        unique : true,
        required : [true, "Oe El Review Ya Existe, Osea Esta Repetido😒"],
        maxlength : [20, "Oe Ojo Con El Limite Del Titulo, El Limite Es De 20 Caracteres >:v"]
    },
    comment:{
        type: String,
        unique : true,
        required : [true, "Oe El Review Ya Existe, Osea Esta Repetido😒"],
        maxlength : [250, "Oe Ojo Con El Limite Del Titulo, El Limite Es De 250 Caracteres >:v"]
    },
    rating: {
        type: String,
        required : [true, " Puedes Dejar Una Valoracion😁"],
        maxlength : [5, "Oe Ojo Solo Se Admiten 5 Estrellas Por Curso"]
    }
})

const Reviews = mongoose.model("Reviews", reviewsSchema)

module.exports = Reviews;