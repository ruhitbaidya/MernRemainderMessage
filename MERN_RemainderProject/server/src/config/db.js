const mongoose = require("mongoose");
require("dotenv").config()
const db_url = process.env.DB_URL;
const DbConnect = ()=>{
    mongoose.connect(db_url)
    .then(()=>{
        console.log("this db is connect")
    }).catch((err)=>{
        console.log(err)
    })
}


module.exports = DbConnect