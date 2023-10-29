const  express = require('express');
const router = express.Router()

//? Uri Cursos Del Proyecto
router.get('/', function(req,resp){
    resp.json({
        success:true, 
        msg: "Aqui Se Traera Todas Las Reviews",
        
    })
})

router.get('/:id', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Traera La Review Cuyo ID Es: ${req.params.id}`,
        
    })
})

router.post('/', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Creara Una Review`,
        
    })
})

router.put('/:id', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Editara La Review Cuyo ID Es: ${req.params.id}`,
        
    })
})

router.delete('/:id', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Eliminara La Review Cuyo ID Es: ${req.params.id}`,
        
    })
})

module.exports = router