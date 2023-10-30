const mongoose = require('mongoose')
const colors= require('colors') 

//! Funcion De Conexion
const  conectarDB=async() =>{

    await mongoose.connect(process.env.MONGO_URL)
    console.log(`Mongo DB Conectado😊....`.bgBlack.red)

}

module.exports = conectarDB;