const mongoose = require('mongoose')


const DB = 'mongodb+srv://satyamdsingh123456:EM75joznN4lJpVkw@cluster0.f6dclvi.mongodb.net/mernstack?retryWrites=true&w=majority'

mongoose.connect(DB)
.then(res => console.log("connected")).catch(error => console.log(error))

module.exports = mongoose;
