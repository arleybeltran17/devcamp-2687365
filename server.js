const  express = require('express');
const dotenv= require('dotenv')
const colors= require('colors') 

//Dependencias De Rutas
const bootcampsRoutes = require('./routes/bootcampsRoutes')
const coursesRoutes= require('./routes/coursesRoutes')




//? Construir El Objeto De Aplicacion

const app = express()

app.use('/bootcamps', bootcampsRoutes)
app.use('/courses', coursesRoutes)

//todo Configurar Variables De Entorno
dotenv.config({
    path: './config/.env'
})

//* Prueba De Url
app.get('/prueba', function(req,resp){
    resp.send('Hola 😎')

})

app.get('/prueba/:id', function(req,resp){
    resp.send(`parametro Enviado: ${req.params.id}`)

})
//? Tomar Variable De Puerto Del Entorno

const puerto= process.env.PUERTO
//!Servidor De Desarrollo
app.listen(puerto, function(){
    console.log(`Se esta ejecutando el servidor ${puerto}`.bgBlack.red)

} )



