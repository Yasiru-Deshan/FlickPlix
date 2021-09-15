import {useState, useEffect} from 'react'
import axios from 'axios'

function TrailersAPI() {
        const [trailers, setTrailers] = useState([])
    
        const getTrailers = async () =>{
            const res = await axios.get('/api/trailers')
           //console.log(res.data.products)
             setTrailers(res.data.trailers)
        }
        useEffect(() =>{
            getTrailers()
        },[])

         return {
             trailers: [trailers, setTrailers]
         }
}

export default TrailersAPI
  