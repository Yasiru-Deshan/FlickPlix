import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setFavourite] = useState([])
    const [history, setHistory] = useState([])

    useEffect(() =>{

    if(token){
    const getUser = async () =>{
     try {
         const res = await axios.get('/user/infor', {
         headers: {Authorization: token}
  })

     setIsLogged(true)
    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
    console.log(res)
   setFavourite(res.data.Favourite)

     } catch (err) {
  alert(err.response.data.msg)
     }
 }

 getUser()
            
 }
},[token])

const addFavourite = async (trailer) => {
    if(!isLogged) return alert("Please login to continue buying")

    const check = cart.every(item =>{
        return item._id !== trailer._id
    })

    if(check){
        setCart([...cart, {...trailer, quantity: 1}])

        await axios.patch('/user/addfavourite', {favourite: [...favourite, {...trailer, quantity: 1}]}, {
         headers: {Authorization: token}
        })
    }else{
        alert("This product has been added to cart.")
    }
}


return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    addCart: addCart,
    history: [history, setHistory]
}
 }
export default UserAPI
 