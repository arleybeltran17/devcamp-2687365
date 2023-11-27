const  express = require('express');
const reviewsModel = require('../models/reviewsModel')
const router = express.Router()
const mongoose = require("mongoose")

//? Uri Cursos Del Proyecto

//! Treaera Todos Las Reviews
router.get('/', async (req,resp)=>{
    //todo Consultar Courses
        try {
            const reviews =  await reviewsModel.find()
            if(reviews.length === 0){
                resp.status(400).json({
                    success: false,
                    msg: "No Hay Reviews"
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: reviews     
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
            const review = await reviewsModel.findById(req.params.id)
            if(!review){
                resp.status(400).json({
                    success: false,
                    msg: `No Existe La Reviews ${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: review 
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
            const newReview = await reviewsModel.create(req.body)
            resp.status(201).json({
                success:true, 
                data: newReview
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
            const updateReview = await reviewsModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            if(!updateReview){
                resp.status(400).json({
                    success:false, 
                    msg:`El Review No Existe${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: updateReview 
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
            const deleteReview = await reviewsModel.findByIdAndDelete(req.params.id,req.body,{new:true})
            if(!deleteReview){
                resp.status(400).json({
                    success:false, 
                    msg:`El Review No Existe${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: deleteReview 
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