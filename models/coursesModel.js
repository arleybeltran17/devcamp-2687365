const mongoose = require('mongoose')

//? Definir Un Modelo Solo Para Mongo

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        unique : true,
        required : [true, "Oe El Curso Ya Existe, Osea Esta Repetido😒"],
        maxlength : [20, "Oe Ojo Con El Limite Del Titulo, El Limite Es De 20 Caracteres >:v"]
    },
    description:{
        type: String,
        unique : true,
        required : [true, "Oe El Curso Ya Existe, Osea Esta Repetido😒"],
        maxlength : [250, "Oe Ojo Con El Limite Del Titulo, El Limite Es De 250 Caracteres >:v"]
    },
    weeks: {
        type: String,
        required : [true, " Cantidad De Semanas Requeridas😁"],
        maxlength : [20, "Oe Ojo Solo Se Admiten 10 Semanas Por Curso"]
    },
    registration_price:{
        type: Number,
        required: [true, "Oe El Curso Debe Tener Un Precio"]
    },
    MinimumSkills:{
        type: [String],
        enum:["Basic","Intermediate", "Expert","Professional"]
    },
    createAt:{
        type: Date,
        required : [true, " Se Requiere Una Fecha De Creacion😁"],

    }
})

const Courses = mongoose.model("Courses", coursesSchema)

module.exports = Courses;