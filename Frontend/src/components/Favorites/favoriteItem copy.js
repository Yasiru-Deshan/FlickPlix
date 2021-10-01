import React,{ useEffect, useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table'


   
function FavoritesTable(props){


  return(
  <div>
    <head>
    <link rel="stylesheet" href="./favorites.css" ></link>
</head>

      <tr> 
        <td style={{width:"300px"}}>
          {props.title}
        </td>
        <td style={{width:"100px"}}>
          {props.year}
        </td>
         <td style={{width:"100px"}}>
          {props.genre}
        </td>
      </tr>
        
 
           

        </div>
        
  );
             
    
}      
  
    


export default FavoritesTable