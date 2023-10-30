const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    qrsrc:{
        type:String,
        required:true
    },
    attendance: [
       {
            date: {
                default:Date.now(),
                type: String,
            },
            isPresent: {
                type: Boolean,
                default: false,
            }
        }
    ]

},{timestamps:true})

module.exports=mongoose.model("User",userSchema)