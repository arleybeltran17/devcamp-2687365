const  express = require('express');
const router = express.Router()

//? Uri Cursos Del Proyecto
router.get('/', function(req,resp){
    resp.json({
        success:true, 
        msg: "Aqui Se Traera Todos Los Usuarios",
        
    })
})

router.get('/:id', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Traera El Usuario Cuyo ID Es: ${req.params.id}`,
        
    })
})

router.post('/', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Creara Un Usuario`,
        
    })
})

router.put('/:id', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Editara El Usuario Cuyo ID Es: ${req.params.id}`,
        
    })
})

router.delete('/:id', function(req,resp){
    resp.json({
        success:true, 
        msg: `Aqui Se Eliminara El Usuario Cuyo ID Es: ${req.params.id}`,
        
    })
})

module.exports = router