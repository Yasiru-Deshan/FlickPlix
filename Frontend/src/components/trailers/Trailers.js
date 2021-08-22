import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import TrailerItem from '../utils/trailerItem/TrailerItem'
import Loading from '../utils/loading/Loading'


function Trailers() {
    const state = useContext(GlobalState)
    const [trailers] = state.productsAPI.products
   const [isAdmin] =state.userAPI.isAdmin
 
    return ( 
        <> 
        <div className="trailers">
            {
                trailers.map(trailer =>{
                    return <ProductItem key={trailer._id} trailer={trailer} 
                    isAdmin = {isAdmin} />
                })
            }
        </div>  
        {trailers.length === 0 && <Loading />}
        </>
    )
}

export default Trailers
