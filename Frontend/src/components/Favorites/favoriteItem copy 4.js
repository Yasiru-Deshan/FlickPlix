import React,{ useEffect} from 'react';
import img from '../../images/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";

   
function FavoritesItem4(){

  useEffect(()=>{
    Aos.init({duration: 2000 });
},[])

  return(
  <div>
    <head>
    <link rel="stylesheet" href="./favorites.css" ></link>
</head>
      
       <div className='wrapper'>
        
         
      
           <img  data-aos="fade-up" className="mimg" src={img} alt=''/>
  
        

           

           
           </div>
           

        </div>
        
  );
             
    
}      
  
    


export default FavoritesItem4