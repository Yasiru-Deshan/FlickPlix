import React, { useEffect, useRef, useState} from 'react';
import img from '../../images/movie.jpg';
import img2 from '../../images/prof.jpg';
import './movie.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Aos from 'aos';
import "aos/dist/aos.css";
import Comments from '../../components/CommentSection/comments';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import axios from 'axios'; 

import Loading from '../../components/mainpages/utils/loading/Loading'



const Movie = () =>{
  
   const desc = useRef();
   const uname = useRef();
 
   const submitHandler = async (e)=>{
       e.preventDefault()
       const newComment = {
           userId: '611b74dd16f8353848675308',
           uname:'Liam Livingstone',
           desc: desc.current.value,
       }

       try{
           await axios.post("http://localhost:8070/api/comments",newComment)
       }catch(err){
           console.log(err)
       }
   }
    
    useEffect(()=>{
        Aos.init({duration: 2000 });
    },[])






    const [allComments,setAllComments] = useState([]);

    useEffect(()=>{

        const getComments = () =>{
        axios.get('http://localhost:8070/api/comments/all').then((res)=>{
            setAllComments(res.data);
        })
    }
       getComments();
    },[])

    const CommentList = ()=>{
        return allComments.map((comment)=>{

            return(
                <Comments
                   key={comment.id}
                   userid = {comment.userId}
                   author={comment.uname}
                   desc={comment.desc}/>

              
            )
            
        })
        
    }
    







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
                                    <p className="likesCount">50</p>
                                    <AddBoxIcon className="bi"/>
                                 </div>
                                 <Link to='/watch'>
                                 <button className="tbutton">Watch Now</button></Link>
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

                     {allComments.length === 0 && <Loading />}
             <CommentList/>

             

                <div>

                <div className="comments">
                <div className="commentwrapper">



                   

                   <form className="commenting" onSubmit={submitHandler}>
                    <input placeholder="Leave a comment here..."
                           type="text"
                           required
                           className="commentinput"
                           ref={desc}    
                           />
                       
                    <button className="commentbutton" type="submit">Send</button>
                    </form>





                </div>
           
                </div>
                </div>
                      </div>

                    <div className="trailer">
                         <ReactPlayer className="player"
                            width="440px"
                            height="240px"
                            controls
                            url="https://youtu.be/3BSSoD73TSk"/>
</div>

            </div>
       
           
            </div>
</div>


        </div>
    )
}

export default Movie
