const router = require("express").Router();
const PlayList = require("../models/Playlist");

//create a playlist
router.post('/new', async(req,res)=>{

    const newPlayList = new PlayList(req.body);

    try{
        const savedPlaylist = await newPlayList.save();
        res.status(200).json(savedPlaylist);
    }catch(err){
        res.status(500).json(err);
    };
});

module.exports = router;