const mongoose = require('mongoose')

//? Definir Un Modelo Solo Para Mongo

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        unique : true,
        required : [true, "Oe El Usuario Ya Existe, Osea Esta Repetido😒"],
        maxlength : [20, "Oe Ojo Con El Limite Del Nombre De Usuario, El Limite Es De 20 Caracteres >:v"]
    },
    email:{
        type: String,
        unique : true,
        required : [true, "Oe El Email Ya Existe, Osea Esta Repetido😒"],
        maxlength : [40, "Oe Ojo Con El Limite Del Email, El Limite Es De 40 Caracteres >:v"]
    },
    password: {
        type: String,
        required : [true, " Cantidad De Semanas Requeridas😁"],
        maxlength : [60, "Oe Ojo Con El Limite, Solo Se Admiten 60 Caracteres >:v"]
    },
    address:{
        type: String,
        required: [true, "Direccion Requerida :3"]
    },
    role:{
        type: String,
        required : [true, "Oe Se Necesita Un Rol😒"],
        maxlength : [20, "Oe Ojo Con El Limite Del Rol De Usuario, El Limite Es De 20 Caracteres >:v"]
    }
})

const Users = mongoose.model("Users", usersSchema)

module.exports = Users;