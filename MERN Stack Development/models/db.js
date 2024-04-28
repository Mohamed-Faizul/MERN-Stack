const mongoose = require('mongoose')

module.exports  = mongoose.connect('mongodb://0.0.0.0:27017/todolist')
.then(() => console.log('Connected Successfully'))
.catch((err) => {console.error(err); });

