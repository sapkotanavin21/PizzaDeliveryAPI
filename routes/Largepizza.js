const express = require('express');
const router = express.Router();
const largepizza = require('../model/Largepizza');

router.route('/')
.get((req,res,next)=>{
    largepizza.find()
    .then((largepizzas)=>{
        res.json(largepizzas);
    }).catch(next);
})

.post((req,res,next)=>{
    largepizza.create(req.body)
.then((largepizzas)=>{
    res.json(largepizzas);
}).catch(next);
});

router.route('/:id')
.get((req,res,next)=>{
    largepizza.findById(req.params.id)
    .then((largepizzas) =>{
    res.json(largepizzas);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
});

module.exports = router;