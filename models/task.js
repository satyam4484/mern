const mongoose = require('../DB/connection');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});


const Task = mongoose.model("Task",taskSchema);

module.exports = Task;