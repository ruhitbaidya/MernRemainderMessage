const mongoose = require("mongoose");
// { today: "", remainDay: "", message: "" }
const remainderSchema = new mongoose.Schema({
    today : {
        type : String,
        require : true
    },
    remainDay : {
        type : String,
        require : true
    },
    message : {
        type : String,
        require : true
    }
}, {timestamps : true})

const remainderModel = mongoose.model("keepRemainder", remainderSchema)
module.exports = remainderModel;