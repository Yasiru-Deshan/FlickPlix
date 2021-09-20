const router = require("express").Router();
const User = require("../models/userModel");
const Favorites = require("../models/Favorites")

{/*
//add to favorites
router.post("/:id/addtofavs", async(req,res)=>{

    const fUser = req.body.userId;
    const movieId = req.params.id;
    

    const favorites = new Favorites({
        userId:fUser,
        movie: movieId
    })

    try{
        const savedFav = await favorites.save();
        res.status(200).json(savedFav);

    }catch(err){
        res.status(500).json(err);
    };
})

//get favorites
router.get('/:id', async(req,res)=>{

    try{
    const userId = req.params.id;
    const favorites = await Favorites.findById(userId);

    res.status(200).json(favorites);
}catch(err){
        res.status(500).json(err);
 } })
*/}






module.exports = router;