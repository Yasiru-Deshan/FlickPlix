import React,{ useEffect, useState, useRef} from 'react';
import { MDBInput, MDBCol } from "mdbreact";
import FavoritesItem from '../../components/Favorites/favoriteItem';
import FavoritesItem1 from '../../components/Favorites/favoriteItem copy';
import FavoritesItem2 from '../../components/Favorites/favoriteItem copy 2';
import FavoritesItem3 from '../../components/Favorites/favoriteItem copy 3';
import FavoritesItem4 from '../../components/Favorites/favoriteItem copy 4';
import FavoritesItem5 from '../../components/Favorites/favoriteItem copy 5';
import FavoritesItem6 from '../../components/Favorites/favoriteItem copy 6';
import FavoritesItem7 from '../../components/Favorites/favoriteItem copy 7';
import FavoritesItem8 from '../../components/Favorites/favoriteItem';
import FavoritesItem9 from '../../components/Favorites/favoriteItem';
import FavoritesItem10 from '../../components/Favorites/favoriteItem';
import FavoritesItem11 from '../../components/Favorites/favoriteItem';
import FavoritesItem12 from '../../components/Favorites/favoriteItem';
import Carousel from "react-elastic-carousel";
import './Browse.css';
import { Link } from 'react-router-dom';
import axios from 'axios'



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

function Browse() {

  let [movieList, setMovieList] = useState([]);

  useEffect(() => {

    const getMovies = () => {
      axios.get('http://localhost:8070/api/movies').then((res) => {
        setMovieList(res.data);
      })
    }

    getMovies();
  }, [])

  const AllMovies = () => {
    return movieList.map((pName) => {

      return (
        <FavoritesItem
          key={pName.id}
          id={pName._id}
          img = {pName.img}
          name={pName.name}
          desc={pName.desc} />
      )
    })
  }

    return (
        <div>
            
        <div style={{ background: '#0F2027',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }}>
        <React.Fragment>

         .<center>
              
           <MDBCol md="6" className="searchbar">
               <input className="form-control" 
                      type="text"
                      placeholder="Search Movies"
                      aria-label="Search"
                       />
           </MDBCol>

           
          </center> 

        <div className="MenuContainer" >

         
            <div className="headingWrapper">
            <div>
        <h1 className="mHeading">Trending</h1>
        </div>

        </div>

  
    

      <div className="carousel">
        <Carousel breakPoints={breakPoints}>

         <AllMovies/>
           {/*  <FavoritesItem/>
            <FavoritesItem1/>
             <FavoritesItem2/>
             <FavoritesItem3/>
             <FavoritesItem4/>
             <FavoritesItem5/>
             <FavoritesItem6/>
             <FavoritesItem7/>*/}
        </Carousel>
      </div>
      </div>


      <div className="MenuContainer" >

         
<div className="headingWrapper">
<div>
<h1 className="mHeading">Horror</h1>
</div>

</div>




<div className="carousel">
<Carousel breakPoints={breakPoints}>
<FavoritesItem7/>
<FavoritesItem6/>
<FavoritesItem5/>
<FavoritesItem4/>
<FavoritesItem3/>
<FavoritesItem2/>
<FavoritesItem1/>
</Carousel>
</div>
</div>
     
     <div className="MenuContainer" >

         
<div className="headingWrapper">
<div>
<h1 className="mHeading">Sci-fi</h1>
</div>

</div>




<div className="carousel">
<Carousel breakPoints={breakPoints}>
<FavoritesItem7/>
<FavoritesItem6/>
<FavoritesItem5/>
<FavoritesItem2/>
<FavoritesItem1/>
</Carousel>
</div>
</div>

<div className="MenuContainer" >

         
<div className="headingWrapper">
<div>
<h1 className="mHeading">Comedy</h1>
</div>

</div>




<div className="carousel">
<Carousel breakPoints={breakPoints}>
<FavoritesItem2/>
<FavoritesItem6/>
<FavoritesItem3/>
<FavoritesItem1/>
<FavoritesItem7/>
<FavoritesItem6/>
<FavoritesItem4/>
</Carousel>
</div>
</div>
    
            
        </React.Fragment>
        </div>

        

   </div>
        
    )
}

export default Browse
