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
import Loading from '../../components/mainpages/utils/loading/Loading';
import { useParams} from "react-router";




const Movie = () =>{
  
   const desc = useRef();
   const uname = useRef();
   const id = useParams().id;
   const [title, setTitle] = useState("");
   const [year, setYear] = useState("");
    const [genre,setGenre] = useState("");
    const [description, setDesc] = useState("");
    const [trailer, setTrailer] = useState("");
    const [video, setVideo] = useState("");
    const [image,setImage] = useState("");
   
    useEffect(() => {
        async function fetchData() {
            const response = (await axios.get(`http://localhost:8070/api/movies/find/${id}`)).data;
            setTitle(response.title);
            setYear(response.year);
            setGenre(response.genre);
            setDesc(response.desc);
            setTrailer(response.trailer);
            setVideo(response.video);
            setImage(response.img)
        }
        fetchData();
    }, [id])






   const submitHandler = async (e)=>{
       e.preventDefault()
       let newc;

       const newComment = {
           userId: '611b74dd16f8353848675308',
           uname:'Liam Livingstone',
           movieId: id,
           //movieId:'6145eb2e19467e39980d27e7',
           desc: desc.current.value,
       }

       try{
           newc = await axios.post("http://localhost:8070/api/comments",newComment)
           if(newc){
               window.alert("Comment has been posted")
           }
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
        axios.get(`http://localhost:8070/api/comments/movie/${id}`).then((res)=>{
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
                   id={comment._id}
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

                              <img data-aos="fade-right" className="Img" src={image} alt=''/>
                            
                            
                             </div>
                          
                          
                          </div>
                          <div className="Column2">
                             <div className="TextWrapper">

                                 <h1 className="Heading">
                                  {title}

                                 </h1>

                                 <p className="Year">{year}</p>
                                 <p className="Genre">
                                    {genre}
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
                                {/*A bouncer with a slightly murderous anger-management problem that 
                                she controls with the help of an electrode-lined vest she uses to shock
                                 herself back to normalcy whenever she gets homicidal. After the first guy 
                                 she's ever fallen for is murdered, she goes on a revenge-fueled rampage to
                                  find the killer while the cops pursue her as their chief suspect.*/}
                                  {description}
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
                            url={trailer}/>
</div>

            </div>
       
           
            </div>
</div>


        </div>
    )
}

export default Movie
