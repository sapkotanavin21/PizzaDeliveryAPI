const express = require('express');
const router = express.Router();
const small = require('../model/Smallpizza');

router.route('/')
.get((req,res,next)=>{
    small.find()
    .then((smalls)=>{
        res.json(smalls);
    }).catch(next);
})

.post((req,res,next)=>{
    small.create(req.body)
.then((small)=>{
    res.json(small);
}).catch(next);
});

router.route('/:id')
.get((req,res,next)=>{
    small.findById(req.params.id)
    .then((smalls) =>{
    res.json(smalls);
}).catch(next);
})
.put((req,res,next)=>{
    small.findByIdAndUpdate(req.params.id)
    .then((smalls) =>{
    res.json(smalls);
}).catch(next);
})
.delete((req,res,next)=>{
    small.findByIdAndDelete(req.params.id)
    .then((smalls) =>{
    res.json(smalls);
}).catch(next);
})


.post((req,res)=>{
    post((req,res,next)=>{
        small.findById(req.params.id)
             .then((smalls) =>{
                 small.food.push(req.body);
                    small.save()
                 .then((smalls) => {
             res.json(smalls);
             })
         }).catch(next);
     })
});

module.exports = router;