const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

modulee.exports.Place = require('./places')