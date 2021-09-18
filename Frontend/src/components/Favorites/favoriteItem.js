import React,{ useEffect} from 'react';
import img from '../../images/medium-cover.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';

   
function FavoritesItem(){

  useEffect(()=>{
    Aos.init({duration: 2000 });
},[])

  return(
  <div>
    <head>
    <link rel="stylesheet" href="./favorites.css" ></link>
</head>
      
       <div className='wrapper'>
        
         
      
           <Link to='movie'><img data-aos="fade-up" className="mimg" src={img} alt=''/></Link>
  
        

           

           
           </div>
           

        </div>
        
  );
             
    
}      
  
    


export default FavoritesItem