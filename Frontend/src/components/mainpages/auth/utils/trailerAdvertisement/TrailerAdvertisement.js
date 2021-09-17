import React from 'react'
import BtnRender from './BtnRender'

//get product information to the user interface
function TrailerAdvertisement({trailer, isArtist}) {

    return (
        <div className="product_card">
            {
                isArtist && <input type="checkbox" checked ={trailer.checked}/>
            }
            <img src={trailer.images.url} alt=""/>

        <div className ="trailer_box">
            <h2 title={trailer.title}>{trailer.title}</h2>
            <span>${trailer.price}</span>
            <p>{trailer.description}</p>        
        </div>
       
        <BtnRender trailer={trailer} />
        </div>
        
         )
}

export default TrailerAdvertisement