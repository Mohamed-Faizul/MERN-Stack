const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    todo : String,
    isComplete : Boolean
})

const Task = mongoose.model('task',TaskSchema)

module.exports = Task;