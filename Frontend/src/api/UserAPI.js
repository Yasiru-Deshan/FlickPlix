import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isArtist, setIsArtist] = useState(false)
    const [favourite, setFavourite] = useState([])
    const [history, setHistory] = useState([])

    useEffect(() =>{

    if(token){
    const getUser = async () =>{
     try {
         const res = await axios.get('/user/infor', {
         headers: {Authorization: token}
  })

     setIsLogged(true)
    res.data.role === 1 ? setIsArtist(true) : setIsArtist(false)
    //console.log(res)
   setFavourite(res.data.favourite)

     } catch (err) {
  alert(err.response.data.msg)
     }
 }

 getUser()
            
 }
},[token])

const addFavourite = async (trailer) => {
    if(!isLogged) return alert("Please login before adding to favourites")

    const check = favourite.every(item =>{
        return item._id !== trailer._id
    })

    if(check){
        setFavourite([...favourite, {...trailer, quantity: 1}])

       await axios.patch('/user/addfavourite', {favourite: [...favourite, {...trailer, quantity: 1}]}, {
          headers: {Authorization: token}
  })
    }else{
        alert("This product has been added to favourite.")
    }
}


return {
    isLogged: [isLogged, setIsLogged],
    isArtist: [isArtist, setIsArtist],
    favourite: [favourite, setFavourite],
    addFavourite: addFavourite,
    history: [history, setHistory]
}
 
  
}



export default UserAPI
 