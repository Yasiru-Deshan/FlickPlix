import {useState, useEffect} from 'react'
import axios from 'axios'

function TrailersAPI() {
        const [trailers, setTrailers] = useState([])
        const [callback, setCallback] = useState(false)
        const [category, setCategory] = useState('')
        const [sort, setSort] = useState('')
        const [search, setSearch] = useState('')
        const [page, setPage] = useState(1)
        const [result, setResult] = useState(0)
    
        useEffect(() =>{
        const getTrailers = async () =>{
            const res = await axios.get(`/api/trailers?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
             setTrailers(res.data.trailers)
             setResult(res.data.result)
        }
       
            getTrailers()
        },[callback, category, sort, search, page])

         return {
            trailers: [trailers, setTrailers],
            callback: [callback,setCallback],
            category: [category, setCategory],
            sort: [sort, setSort],
            search: [search, setSearch],
            page: [page, setPage],
            result: [result, setResult]
         }
}

export default TrailersAPI
  