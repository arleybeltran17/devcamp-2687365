const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

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

usersSchema.pre('save', async function(next){
    //! Generar La Sal Para El Password

    const sal = await bcryptjs.genSalt(3)

    //? Crear La Clave Encriptada Con La Sal Para Asignarla  A Un Password De La Entidad
    this.password = await bcryptjs.hash(this.password, sal)
})

usersSchema.methods.compararPassword = async function (password){
    return await bcryptjs.compare(password, this.password)

}

const Users = mongoose.model("Users", usersSchema)

module.exports = Users;