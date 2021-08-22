import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product}) {
    const state = useContext(GlobalState)
   const [isAdmin] =state.userAPI.isAdmin
   const addFavourite = state.userAPI.addFavourite

   
    return ( 
        <div className="row_btn">
            {
                isAdmin ?
                <>
                <Link id="btn_buy" to="#!">
                Delete
            </Link>
            <Link id="btn_view" to={`/edit_trailer/${trailer._id}`} >
             Edit
            </Link>
            </>
            

      : <>
             <Link id="btn_buy" to="#!" onClick ={() => addFavourite(trailer)}>
             Like
            </Link>
            <Link id="btn_view" to={`/detail/${trailer._id}`} >
            View
            </Link>
        </>
        }
        </div>
    )
}

export default BtnRender
