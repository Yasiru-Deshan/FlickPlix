import React,{ useEffect, useState} from 'react';
import {  MDBCol } from "mdbreact";
import FavoritesItem from '../../components/Favorites/favoriteItem';
import Carousel from "react-elastic-carousel";
import './Browse.css';
import axios from 'axios'



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

function Browse() {

  let [movieList, setMovieList] = useState([]);
  let [actionMovieList, setActionMovieList] = useState([]);
  let [search, setSearch] = useState("");

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
          title={pName.title}
          desc={pName.desc} 
          year={pName.year}
          />
      )
    })
  }

  useEffect(() => {
   const getActionMovies = () => {
      axios.get('http://localhost:8070/api/movies/movie/Action').then((res) => {
        setActionMovieList(res.data);
      })
    }

    getActionMovies();
  }, [])

  const AllActionMovies = () => {
    return actionMovieList.map((aName) => {

      return (
        <FavoritesItem
          key={aName.id}
          id={aName._id}
          img = {aName.img}
          title={aName.title}
          desc={aName.desc} 
          year={aName.year}
          />
      )
    })
  }

  //search filter
    if(search.length > 0){
      movieList = movieList.filter((i) => {
          return i.title.toLowerCase().match(search.toLowerCase());
      });
        actionMovieList = actionMovieList.filter((i) => {
          return i.title.toLowerCase().match(search.toLowerCase());
      });
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
                      onChange={(e) => {setSearch(e.target.value)}} value={search}
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
 <AllActionMovies/>
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
 <AllMovies/>
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
 <AllMovies/>
</Carousel>
</div>
</div>
    
            
        </React.Fragment>
        </div>

        

   </div>
        
    )
}

export default Browse
