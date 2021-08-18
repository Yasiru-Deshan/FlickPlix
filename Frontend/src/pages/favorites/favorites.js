import React from 'react';
import img from '../../images/movie.jpg';
import { MDBInput, MDBCol } from "mdbreact"
import FavoritesItem from './favoriteItem';
import Carousel from "react-elastic-carousel";
import './favorites.css';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


function Favorites() {
    return (

        <div>
        <div style={{background: '#2C3E50', /* fallback for old browsers */
            background: '-webkit-linear-gradient(to right, #4CA1AF, #2C3E50)',  /* Chrome 10-25, Safari 5.1-6 */
            background: 'linear-gradient(to right, #4CA1AF, #2C3E50)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }}>
        <React.Fragment>

         .<center>
              
           <MDBCol md="6" className="searchbar">
               <input className="form-control" 
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                       />
           </MDBCol>
           
          </center> 

        <div className="MenuContainer" >

         
            
        <h1 className="fHeading">Favorites</h1>
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          <FavoritesItem>One</FavoritesItem>
          <FavoritesItem>Two</FavoritesItem>
          <FavoritesItem>Three</FavoritesItem>
          <FavoritesItem>Four</FavoritesItem>
          <FavoritesItem>Five</FavoritesItem>
          <FavoritesItem>Six</FavoritesItem>
          <FavoritesItem>Seven</FavoritesItem>
          <FavoritesItem>Eight</FavoritesItem>
        </Carousel>
      </div>
      </div>
    
            
        </React.Fragment>
        </div>

   </div>

    )
}

export default Favorites
