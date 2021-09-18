import React,{ useEffect} from 'react';
import img from '../../images/EK9zDtnUcAA5zXM-4.jpeg';
import Aos from 'aos';
import "aos/dist/aos.css";

   
function FavoritesItem5(){

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
  
    


export default FavoritesItem5