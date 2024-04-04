const express = require("express");
const { auth } = require("../MiddleWare/authmiddleware");

const { BugsModel} =require("../Model/Bugs.model");


const BugsRouter = express.Router();
BugsRouter.use(auth);


BugsRouter.get("/", async(req,res) => {
    try{
        const bugs=await BugsModel.find()
        if(bugs){
            res.status(200).json({bugs})
        }else{
            res.status(400).json({msg:"Post not Found"})
        }
    }catch(err){
        res.status(400).json({error:err})
    }
})


BugsRouter.post("/", async(req,res) => {
    try{
     console.log(req.body);
     const post = new BugsModel(req.body);
     await post.save();
     res.json({msg: "Post create successfully"});     
    }catch(err){
     res.json(err);
    }
 })

BugsRouter.patch("/:id", async (req,res) => {
    try{
       const postID = req.params.id;
        await BugsModel.findByIdAndUpdate({_id:postID}, req.body);
        res.status(200).json({"msg": "updated"})
    }catch(err){
        res.status(400).send(err);
    }
})


BugsRouter.delete("/:id", async(req,res) => {
    try{
        const postID = req.params.id;
         await BugsModel.findByIdAndDelete({_id:postID}, req.body);
         res.status(200).json({"msg": "title has been deleted"})
     }catch(err){
         res.status(400).send(err);
     }
})







module.exports = {
    BugsRouter
}