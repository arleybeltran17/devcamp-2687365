const  express = require('express');
const router = express.Router()


//? Uri Del Proyecto
router.get('/', function(req,resp){
    resp.json({
        success:true, 
        msg: "Aqui Se Traera Todos Los BootCamps",
        
    })
})

router.get('/:id', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Traera El BootCamp Cuyo ID Es: ${req.params.id}`,
        
    })
})

router.post('/', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Creara Un BootCamp`,
        
    })
})

router.put('/:id', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Editara El BootCamp Cuyo ID Es: ${req.params.id}`,
        
    })
})

router.delete('/:id', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Eliminara El BootCamp Cuyo ID Es: ${req.params.id}`,
        
    })
})

module.exports = router
