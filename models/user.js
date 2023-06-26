const mongoose = require('../DB/connection')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        min:10,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
}); 
    
userSchema.pre("save",async function(next){
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
});

// userSchema.pre("make",async function(next){
//     console.log("makine the user data ");
//     next();
// })

const User = mongoose.model("User",userSchema);

module.exports = User;