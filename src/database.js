const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/notes-db-app', { useNewUrlParser: true })
.then(db => console.log('DB is conected'))
.catch(err => console.log(err))