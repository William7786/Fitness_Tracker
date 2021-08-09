const mongoose = require("mongoose")
const schema = mongoose.schema;
const workout = new schema({
    date:{
        type: date,
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
            }
        }
    ]
})