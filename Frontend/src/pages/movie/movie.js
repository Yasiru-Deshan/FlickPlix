import React, { useEffect} from 'react';
import img from '../../images/movie.jpg';
import img2 from '../../images/prof.jpg';
import './movie.css';
import './moviemedia.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Aos from 'aos';
import "aos/dist/aos.css";


const Movie = () =>{

    
    useEffect(()=>{
        Aos.init({duration: 2000 });
    },[])

    return (


        <div>
            <div className="MovieContainer">

                <div className="MovieWrapper">
                     <div className="MovieRow">
                     <div className="Column1">
                             <div className="ImgWrap">

                              <img data-aos="fade-right" className="Img" src={img} alt=''/>
                            
                            
                             </div>
                          
                          
                          </div>
                          <div className="Column2">
                             <div className="TextWrapper">

                                 <h1 className="Heading">
                                  JOLT

                                 </h1>

                                 <p className="Year">2021</p>
                                 <p className="Genre">
                                     Thriller
                                 </p>

                               

                                 <div className="icons">
                                    <FavoriteIcon className="fi"/>
                                    <AddBoxIcon className="bi"/>
                                 </div>
                                 <div>
                              {/*}   <img className="profileuserimg"
                                  src={img2}
    alt=''/>*/}
                         </div>
                               
                             </div>
                            
                          
                          
                          </div>

                          <div className="Column3">
                          <p className="Syno">
                                     Synopsis
                                 </p>
                          <p className="Description">
                                A bouncer with a slightly murderous anger-management problem that 
                                she controls with the help of an electrode-lined vest she uses to shock
                                 herself back to normalcy whenever she gets homicidal. After the first guy 
                                 she's ever fallen for is murdered, she goes on a revenge-fueled rampage to
                                  find the killer while the cops pursue her as their chief suspect.
                          </p>
                        

                          </div>

                         
                      </div>
                   </div>
                </div>

         
           
            
        </div>
    )
}

export default Movie
