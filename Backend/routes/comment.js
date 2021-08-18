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

//get comments

router.get('/all', async(req,res)=>{

     Comment.find().then((comments)=>{
         res.json(comments)
     }).catch((err)=>{
         console.log(err)
     })

})

module.exports = router;