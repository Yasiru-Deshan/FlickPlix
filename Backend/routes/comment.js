const router = require("express").Router();
const Comment = require("../models/Comment");


//post a comment 
router.post('/', async(req,res)=>{
    const newComment = new Comment(req.body);

    try{
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    }catch(err){
        res.status(500).json(err);
    };
});

module.exports = router;