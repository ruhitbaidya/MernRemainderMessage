const app = require("./app");
require("dotenv").config()
const DbConnect = require("./src/config/db")
const port = process.env.PORT || 5000


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        DbConnect()
        console.log("this server is start" + port)
    }
})