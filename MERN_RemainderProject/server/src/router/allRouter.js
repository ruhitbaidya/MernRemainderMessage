const express = require("express");
const router = express.Router();
const {addDbRemainder, findMessageControl, deleteMessage} = require("../controler/allRoutControl")
router.post("/add-Remainder", addDbRemainder)
router.get("/find-allRM", findMessageControl)
router.delete("/delete-remainder/:id", deleteMessage)

module.exports = router