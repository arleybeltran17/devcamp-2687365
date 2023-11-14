const mongoose = require('mongoose')

//? Definir Un Modelo Solo Para Mongo

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        unique : true,
        required : [true, "Oe El Bootcamp Ya Existe, Osea Esta Repetido😒"],
        maxlength : [20, "Oe Ojo Con El Limite Del Nombre, El Limite Es De 20 Caracteres >:v"]
    },
    phone:{
        type: Number,
        required : [true, "Oe El Bootcamp Ya Existe, Osea Esta Repetido😒"],
        max : [999999999, "Oe Ojo Con El Limite Del Telefono, El Limite Es De 10 Caracteres >:v"]
    },
    address: {
        type: String,
        required : [true, " Direccion Requerida😁"],
    },
    topics:{
        type: [String],
        enum:["AI","BackEnd", "FrontEnd", "Devops","Desarrollo_Videojuegos"]
    },
    averageRating:Number,
    createAt:{
        type: Date,
        required : [true, " Se Requiere Una Fecha De Creacion😁"],

    }
})

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema)

module.exports = Bootcamp;