const express = require('express');
const usersModel = require('../models/usersModel')
const router = express.Router()
const mongoose = require("mongoose");
const { post } = require('./bootcampsRoutes');

//? Uri Cursos Del Proyecto

//! Treaera Todos Las Reviews
router.get('/', async (req,resp)=>{
    //todo Consultar Courses
        try {
            const users =  await usersModel.find()
            if(users.length === 0){
                resp.status(400).json({
                    success: false,
                    msg: "No Hay Usuarios"
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: users     
                })
            }

        } catch (error) {
            resp.status(500).json({
                success: false,
                msg: `Error Interno De Servidor ${error.message}`
            })
        }

})

//! Treaera La Review Por Id

router.get('/:id', async (req,resp)=>{
    try {

        //* Validar Id Para MongoDB
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            resp.status(400).json({
                success:false,
                meg:`Id Invalido Como El Papa De Sebastian`
            })
        }else{
            const users = await usersModel.findById(req.params.id)
            if(!users){
                resp.status(400).json({
                    success: false,
                    msg: `No Existen Usuarios ${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: users 
                })
            }
        }
    } catch (error) {
        resp.status(error.status).json({
            success:false,
            msg: `Error Interno De Servidor ${error.message}`
        })
    }
})

    //?Registrar Nuevo Review
    router.post('/', async(req,resp)=>{

        try {
            const newUser = await usersModel.create(req.body)
            resp.status(201).json({
                success:true, 
                data: newUser
            })
    
        } catch (error) {
            resp.status(500).json({
                success:false, 
                msg: `Error Interno De Servidor ${error.message}`
            })
            
        }
        })

//? Actualizar Por Id
router.put('/:id', async(req,resp)=>{
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            resp.status(400).json({
                success:false, 
                msg:"Id Es Invalido Pai"
            })
        }else{
            const updateUser = await usersModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            if(!updateUser){
                resp.status(400).json({
                    success:false, 
                    msg:`El Review No Existe${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: updateUser 
                })
            }
        }
    } catch (error) {
        resp.status(500).json({
            success:false, 
            msg: `Error Interno De Servidor ${error.message}`
        })
    }

    })

//? Eliminar Por Id
router.delete('/:id', async(req,resp)=>{
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            resp.status(400).json({
                success:false, 
                msg:"Id Es Invalido Pai"
            })
        }else{
            const deleteUser = await usersModel.findByIdAndDelete(req.params.id,req.body,{new:true})
            if(!deleteUser){
                resp.status(400).json({
                    success:false, 
                    msg:`El Usuario No Existe${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: deleteUser 
                })
            }
        }
    } catch (error) {
        resp.status(500).json({
            success:false, 
            msg: `Error Interno De Servidor ${error.message}`
        })
    }
    })

    router.post("/register", async(req,resp)=>{
        try {
            const user = await usersModel.create(req.body)
            resp.status(201).json({
                success: true,
                data: user
            })
        } catch (error) {
            resp.status(500).json({
                success: false,
                error: error.message
            })
        }
        
    })

    router.post("/login", async(req,resp)=>{
        try {
            //! Desestructurar :3
            const {email, password}= req.body
            //* Buscar Usuario Con Ese Email
            const user= await usersModel.findOne({email}).select("+password")
            if(!user){
                resp.status(404).json({
                    success:false,
                    message: 'User Not Found'
                })

            }else{
                const isMatch = await user.compararPassword(password)
                if(isMatch){
                    resp.status(200).json({
                        success: true,
                        msg: "Usuario Logeado Correctamente"
                    })
                }else{
                    resp.status(401).json({
                        success: false,
                        msg: "Credenciales Invalidas"
                    })
                }
            }
        } catch (error) {
            resp.status(500).json({
                success: false,
                msg:error.message
            })
        }
    })

module.exports = router