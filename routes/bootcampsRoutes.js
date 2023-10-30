const  express = require('express');
const bootcampModel = require('../models/bootcampModel')
const router = express.Router()



//? Uri Del Proyecto
router.get('/', async (req,resp)=>{
    //todo Consultar Bootcamps

  const bootcamps =  await bootcampModel.find()
    resp.json({
        success:true, 
        data: bootcamps     
    })
})

router.get('/:id', async (req,resp)=>{
    //! Consultar Bootcamp por id
    const bootcamp = await bootcampModel.findById(req.params.id)
    resp.json({
        success:true, 
        data: bootcamp
        
    })
})

router.post('/', async(req,resp)=>{
    //?Registrar Nuevo BootCamp
    const newBootCamp = await bootcampModel.create(req.body)
    resp.json({
        success:true, 
        data: newBootCamp

    })
})

router.put('/:id', async(req,resp)=>{
    const updateBootCamp = await bootcampModel.updateOne(bootcampModel.findById(req.params.id), req.body)
    resp.json({
        success:true, 
        data: updateBootCamp
       
        
    })
})

router.delete('/:id', async(req,resp)=>{
    const DeleteBootCamp = await bootcampModel.deleteOne(bootcampModel.findById(req.params.id))
    resp.json({
        success:true,
        data: DeleteBootCamp 

        
    })
})

module.exports = router
