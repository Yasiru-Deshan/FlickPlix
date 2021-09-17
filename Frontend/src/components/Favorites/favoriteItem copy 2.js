import React,{ useEffect} from 'react';
import img from '../../images/a2b72519a91b6e5dc10d4259a3831b22.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";

   
function FavoritesItem2(){

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
  
    


export default FavoritesItem2