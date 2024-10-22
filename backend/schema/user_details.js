import mongoose from "mongoose"

const data = new mongoose.Schema({
    username : {type:String,required:true,unique:true},
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true,},
    
})

const user_data = mongoose.model('user_data',data);

export default user_data;