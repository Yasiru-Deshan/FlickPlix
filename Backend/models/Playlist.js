const mongoose = require("mongoose");

const playListSchema = new mongoose.Schema(
    {

        userId:{
            type: String,
            required: true
        },

        name:{
            type: String,
            max: 10,
            required: true
        },

        desc:{
            type: String,
            max: 500
        }
    }
);

module.exports = mongoose.model("PlayList", playListSchema);