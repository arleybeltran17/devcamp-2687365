const  express = require('express');
const bootcampModel = require('../models/bootcampModel')
const router = express.Router()
const mongoose = require("mongoose")



//? Uri Del Proyecto
router.get('/', async (req,resp)=>{
    //todo Consultar Bootcamps
        try {
            const bootcamps =  await bootcampModel.find()
            if(bootcamps.length === 0){
                resp.status(400).json({
                    success: false,
                    msg: "No Hay BootCamps"
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: bootcamps     
                })
            }

        } catch (error) {
            resp.status(500).json({
                success: false,
                msg: `Error Interno De Servidor ${error.message}`
            })
        }

})

//? Boot Camp Por ID
router.get('/:id', async (req,resp)=>{
    //! Consultar Bootcamp por id
    try {

        //* Validar Id Para MongoDB
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            resp.status(400).json({
                success:false,
                meg:`Id Invalido Como El Papa De Sebastian`
            })
        }else{
            const bootcamp = await bootcampModel.findById(req.params.id)
            if(!bootcamp){

                resp.status(400).json({
                    success: false,
                    msg: `No Existe El BootCamp ${req.params.id}`
                })

            }else{
                resp.status(200).json({
                    success:true, 
                    data: bootcamp 
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
        const newBootCamp = await bootcampModel.create(req.body)
        resp.status(201).json({
            success:true, 
            data: newBootCamp 
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
            const updateBootCamp = await bootcampModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            if(!updateBootCamp){
                resp.status(400).json({
                    success:false, 
                    msg:`El BootCamp No Existe${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: updateBootCamp 
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
            const updateBootCamp = await bootcampModel.findByIdAndDelete(req.params.id,req.body,{new:true})
            if(!updateBootCamp){
                resp.status(400).json({
                    success:false, 
                    msg:`El BootCamp No Existe${req.params.id}`
                })
            }else{
                resp.status(200).json({
                    success:true, 
                    data: updateBootCamp 
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
