import React from 'react'
import BtnRender from './BtnRender'

//get product information to the user interface
function TrailerItem({trailer, isAdmin}) {

    return (
        <div className="trailer_card">
            {
                isAdmin && <input type="checkbox" checked ={trailer.checked}/>
            }
            <img src={trailer.images.url} alt=""/>

        <div className ="trailer_box">
            <h2 title={trailer.title}>{trailer.title}</h2>
            <span>${trailer.price}</span>
            <p>{trailer.description}</p>        
        </div>
       
        <BtnRender product={trailer} />
        </div>
        
         )
}

export default TrailerItem
