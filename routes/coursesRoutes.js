const  express = require('express');
const coursesModel = require('../models/coursesModel')
const router = express.Router()
const mongoose = require("mongoose")

//? Uri Cursos Del Proyecto

//! Treaera Todos Los Cursos
router.get('/', async (req,resp)=>{
    //todo Consultar Courses
        try {
            const courses =  await coursesModel.find()
            if(courses.length === 0){
                resp.status(400).json({
                    success: false,
                    msg: "No Hay Cursos"
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: courses     
                })
            }

        } catch (error) {
            resp.status(500).json({
                success: false,
                msg: `Error Interno De Servidor ${error.message}`
            })
        }

})

//! Treaera El Curso Por Id

router.get('/:id', async (req,resp)=>{
    //! Consultar Curso por id
    try {

        //* Validar Id Para MongoDB
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            resp.status(400).json({
                success:false,
                meg:`Id Invalido Como El Papa De Sebastian`
            })
        }else{
            const courses = await coursesModel.findById(req.params.id)
            if(!courses){
                resp.status(400).json({
                    success: false,
                    msg: `No Existe El Curso ${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: courses 
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

    //?Registrar Nuevo BootCamp
    router.post('/', async(req,resp)=>{

        try {
            const newCourse = await coursesModel.create(req.body)
            resp.status(201).json({
                success:true, 
                data: newCourse 
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
            const updateCourses = await coursesModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            if(!updateCourses){
                resp.status(400).json({
                    success:false, 
                    msg:`El Curso No Existe${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: updateCourses 
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
            const deleteCourse = await coursesModel.findByIdAndDelete(req.params.id,req.body,{new:true})
            if(!deleteCourse){
                resp.status(400).json({
                    success:false, 
                    msg:`El Curso No Existe${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: deleteCourse 
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


module.exports = router