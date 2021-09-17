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

//get playlists
router.get('/', async(req,res)=>{

    PlayList.find().then((list)=>{
        res.json(list)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;