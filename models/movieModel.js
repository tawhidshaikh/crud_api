const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a movie name"]
        },
        img: {
            type: String,   
            required: true,
        },
        summary: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Movie = mongoose.model('Movie', schema);

module.exports = Movie;