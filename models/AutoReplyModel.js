const mongoose = require("mongoose")
const AutoReply = mongoose.Schema({
    message: {
        type: String,
    },
    reply: {
        type: String,
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
        default: Date.now(),
    }
})
module.exports = mongoose.model("AutoReply", AutoReply)