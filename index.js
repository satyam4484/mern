const express = require("express"),
bodyParser  = require( 'body-parser' )
// const router = express.Router();
const path = require('path')
require("./DB/connection")
require("./task")
require("./user");
require('./models/model')

const Task = require("./models/task");
const User = require("./models/user");
const createTask = require('./task')


const app = express();
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));
app.use( bodyParser({ extended: false }) )
app.set('view engine','hbs');


app.get('/',async (req,res) => {
    const data = await  User.find({},{_id:1,name:1});
    res.send(data);
})


app.post('/',async (req,res) => {
    console.log(req.body);
    const user = await new User(req.body).save();
    res.redirect('/');
})


// app.post('/',async (req,res)=>{
//     const data = await createTask(req.body.title);
//     res.redirect('/');
// })

// app.get('/delete/:id',async (req,res) => {
//     const data = await Task.deleteOne({_id:req.params.id});
//     console.log(data);
//     res.redirect('/')
// })


app.listen(3000,()=>{
    console.log("listening to port")
})  


