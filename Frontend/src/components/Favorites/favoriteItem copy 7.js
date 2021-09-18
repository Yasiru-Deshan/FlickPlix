import React,{ useEffect} from 'react';
import img from '../../images/wonder-woman-1984.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";
import './../../pages/favorites/favorites.css'

   
function FavoritesItem7(){

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
  
    


export default FavoritesItem7