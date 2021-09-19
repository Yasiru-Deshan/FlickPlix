import React,{ useEffect} from 'react';
import img from '../../images/movie.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';

   
function FavoritesItem1(){

  useEffect(()=>{
    Aos.init({duration: 2000 });
},[])

  return(
  <div>
    <head>
    <link rel="stylesheet" href="./favorites.css" ></link>
</head>
      
       <div className='wrapper'>
        
         
      
           <Link to='/movie/6145eb2e19467e39980d27e7'><img  data-aos="fade-up" className="mimg" src={img} alt=''/></Link>
  
        

           

           
           </div>
           

        </div>
        
  );
             
    
}      
  
    


export default FavoritesItem1