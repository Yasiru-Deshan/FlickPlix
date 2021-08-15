import React, { useEffect} from 'react';
import img from '../../images/movie.jpg';
import img2 from '../../images/prof.jpg';
import './movie.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Aos from 'aos';
import "aos/dist/aos.css";
import Comments from '../../components/CommentSection/comments';
import ReactPlayer from 'react-player';


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
                                 <button className="tbutton">Watch Now</button>
                                 <div>
                          {/*     <img className="profileuserimg"
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

                <div className="commentcontainer">
                <div className="commenttrailerWrapper">
                     <div className="commentRow">
                     <div className="commentSection">
                     <h1 className="commenttitle">Comments</h1>
              <Comments/>

                <div>

                <div className="comments">
                <div className="commentwrapper">
                   
                    <input placeholder="Leave a comment here..."
                           type="text"
                           className="commentinput"/>
                       
                    <button className="commentbutton">Send</button>
                </div>
           
                </div>
                </div>
                      </div>

                    <div className="trailer">
                         <ReactPlayer className="player"
                            width="440px"
                            height="240px"
                            controls
                            url="blob:https://lecturecapture.sliit.lk/c12d79da-fb9b-455e-a29d-eed19307927e"/>
</div>

            </div>
       
           
            </div>
</div>
        </div>
    )
}

export default Movie
