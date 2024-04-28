const express = require('express');
const Task = require('../models/models')
const router = express.Router()

router.get('/' , (req,res) => {
    Task.find()
    .then(doc => { res.json(doc) } )
    .catch(err => { console.log(err) } )     
        
      
})

router.post('/',(req,res) => {
    const task = new Task(req.body)
    task.save()
    .then(doc => { res.json(doc) } )
    .catch(err => { console.log(err) } )
})

router.put('/:id',(req,res) => {
    Task.findOneAndUpdate({
        _id : req.params.id
    },req.body,{
        new : true
    }).then(doc => {res.json(doc)})
    .catch(err => {console.log(err)})
    
})

router.delete('/:id',(req,res) => {
    Task.findByIdAndDelete(req.params.id)
    .then(doc => {res.json(doc)})
    .catch(err => {console.log(err)} )
})

module.exports = router;