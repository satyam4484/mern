const Task = require('./models/task');

const createTask = async (title) => {
    try{
        const task = await new Task({
            title
        }).save();
    }catch(error){
        console.log(error)
    }
}

module.exports = createTask;
