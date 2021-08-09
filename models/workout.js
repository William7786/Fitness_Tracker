const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const workout = new Schema({
    date:{
        type: Date,
        default:Date.now,
    },
    exercises:[
        {
            type:{
                type:String,
                required: "Enter the type of exercise",
            },
            name:{
                type:String,
                required: "Enter the name of the exercise",
            },
            duration:{
                type:Number,
                required: "Enter the number of muinites the exercise took",
            },
            weight:{
                type:Number
            },
            reps:{
                type:Number
            },
            sets:{
                type:Number
            },
            distance:{
                type:Number
            }

            }
    
    ]
})
const Workout = mongoose.model("Workout", workout);
module.exports= Workout;