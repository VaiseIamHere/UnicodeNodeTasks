const mongoose = require('mongoose')

const houses = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw"]
const hogwartSchema = mongoose.Schema(
    {
        id:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        house:{
            type: String,
            default: houses[Math.floor(Math.random()*4)]
        },
        wizard:{
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const harry = mongoose.model("harrypotter", hogwartSchema)
module.exports = harry