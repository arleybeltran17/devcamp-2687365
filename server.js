const  express = require('express');
const dotenv= require('dotenv')
const colors= require('colors') 
const conectarDB = require('./config/db')

//Dependencias De Rutas
const bootcampsRoutes = require('./routes/bootcampsRoutes')
const coursesRoutes= require('./routes/coursesRoutes')
const reviewsRoutes= require('./routes/reviewsRoutes')
const usersRoutes= require('./routes/usersRoutes')

//todo Configurar Variables De Entorno

dotenv.config({
    path: './config/.env'
})

conectarDB() 

//? Construir El Objeto De Aplicacion

const app = express()

app.use(express.json())

app.use('/bootcamps', bootcampsRoutes)
app.use('/courses', coursesRoutes)
app.use('/reviews', reviewsRoutes)
app.use('/users', usersRoutes)

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



