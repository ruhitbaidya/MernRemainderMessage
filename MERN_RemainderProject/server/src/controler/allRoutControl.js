const remainderModel = require("../model/remianderModel")
const addDbRemainder = async (req, res)=>{
    // { today: "", remainDay: "", message: "" }
    try {
        const {today, remainDay, message} = req.body;
        console.log(req.body)
        if(!today || !remainDay || !message){
            return res.status(403).json({success : false, message : "plece fillup all the gap"})
        }else{
            const findData = await remainderModel({
                today : today,
                remainDay : remainDay,
                message : message
            }).save();
            return res.status(200).json({success : true, message : "Remainder Set Successfully", data : findData})
        }
    } catch (error) {
        res.status(405).json({success : false, error : error})
    }
}

const findMessageControl = async (req, res)=>{
    try{
        const findDataAll = await remainderModel.find();
        res.status(202).json({success : true, message : "find successfully", data : findDataAll})
    }catch(error){
        res.status(405).json({success : false, message : "Problem in find Router"})
    }
}

const deleteMessage = async (req, res)=>{
    try{
        const {id} = req.params;
        const findAndDelete = await remainderModel.findByIdAndDelete({_id : id}, {new : true})
        if(findAndDelete){
            return res.status(200).json({success : true, message : "successfully delte this message"})
        }else{
            return res.status(404).json({success : false, message : "this delete problem in id"})
        }
    }catch(error){
        res.status(405).json({success : false, message : "problem in delete"})
    }
}
module.exports = {
    addDbRemainder,
    findMessageControl,
    deleteMessage
}