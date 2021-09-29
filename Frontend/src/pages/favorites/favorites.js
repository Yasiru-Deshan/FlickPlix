import React,{ useEffect, useState, useRef} from 'react';
import { MDBInput, MDBCol } from "mdbreact"
import FavoritesItem from '../../components/Favorites/favoriteItem';
import FavoritesItem1 from '../../components/Favorites/favoriteItem copy';
import FavoritesItem2 from '../../components/Favorites/favoriteItem copy 2';
import FavoritesItem3 from '../../components/Favorites/favoriteItem copy 3';
import FavoritesItem4 from '../../components/Favorites/favoriteItem copy 4';
import FavoritesItem5 from '../../components/Favorites/favoriteItem copy 5';
import FavoritesItem6 from '../../components/Favorites/favoriteItem copy 6';
import FavoritesItem7 from '../../components/Favorites/favoriteItem copy 7';
import Carousel from "react-elastic-carousel";
import './favorites.css';
import Playlist from '../../components/Playlist/playlist';
import axios from 'axios';
import Modal from 'react-modal';
import { Button,Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];


function Favorites() {
    
    const location = useLocation();
    const movie = location.movie;
    const name = useRef();
    const desc = useRef();
    let [plist, setPlaylist] = useState([]);
    const [mdal,setModal] = useState(false);
    let [search, setSearch] = useState("");

    const submitHandler  = async(e)=>{
      e.preventDefault()
      let newPlay;

      const newPlaylist = {
        userId: '611b74dd16f8353848675308',
        name: name.current.value,
        desc: desc.current.value,
      }

      
      try{
        newPlay = await axios.post("http://localhost:8070/api/playlists/new", newPlaylist)

        if(newPlay){
            window.alert("New Play list has been added")
        }
      }catch(err){
        console.log(err)
      }
    }



    useEffect(()=>{

      const getPlayLists = () =>{
        axios.get('http://localhost:8070/api/playlists').then((res)=>{
          setPlaylist(res.data);
        })
      }

      getPlayLists();
    },[])

    const PlaylistAll = ()=>{
      return plist.map((pName)=>{

        return(
          <Playlist
               key = {pName.id}
               id  =   {pName._id}
               name = {pName.name}
               desc = {pName.desc} />
        )
      })
    }

    //search filter
    if(search.length > 0){
      plist = plist.filter((i) => {
          return i.name.toLowerCase().match(search.toLowerCase());
      });
    }

    //Generate Order report
        const pdf = () => {
          const loading = document.getElementById('loading');
          loading.style.display = "";//display loading icon
          const dwnIcon = document.getElementById('dwn-icon');
          dwnIcon.style.display = "none";//hide download icn
  
          setTimeout(() => {  
              loading.style.display = "none";
              dwnIcon.style.display = "";
          }, 1300);//display loading icon for 2 seconds  
  
          let bodyData = [];
          for(let i = 0;plist.length > i ; i++){
              bodyData.push([plist[i].name,plist[i].desc]);
          }//save json data to bodydata in order to print in the pdf table
  
          const doc = new jsPDF({orientation:"portrait"});
          var time = new Date().toLocaleString();
          doc.setFontSize(20);
          doc.text(`Received Messages Report`, 105, 13, null, null, "center");
          doc.setFontSize(10);
          doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
          doc.setFontSize(12);
          doc.text("FlickPilx Online Platform", 105, 22, null, null, "center");
          
          doc.autoTable({
              theme : 'grid',
              styles: {halign:'center'},
              headStyles:{fillColor:[71, 201, 76]},
              startY:27,
              head: [['PlayList Name','Title']],
              body: bodyData
          })
          doc.save('ReceivedMessagesReport.pdf');
      }

    return (

        <div>

        <Modal
         isOpen={mdal} 
         onRequestClose={()=> setModal(false)}
         style={{
           overlay: {
             backgroundColor: 'transparent',
             marginTop: '100px',
             width: '30%',
             height: '445px',
             marginLeft: '50%', 
           },

           content: {
             borderRadius: '20px',
             color: 'white',
             background: '#373B44'


             
           }
         }}>
          <h1>Create a New Playlist</h1>
          <Form onSubmit={submitHandler}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
                          placeholder="Enter playlist name"
                          ref ={name} 
                          />

            <Form.Label>Description</Form.Label>
            <Form.Control type="text" 
                          placeholder="Enter playlist description"
                          ref={desc}  
                          />
           <Button variant="primary" onClick={()=>setModal(false)}>
             Close
            </Button>
            <Button variant="primary" type="submit">
             Create
            </Button>
           
          </Form>
        </Modal>


        <div style={{ background: '#0F2027',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }}>
        <React.Fragment>

         .<center>
              
           <MDBCol md="6" className="searchbar">
               <input className="form-control" 
                      type="text"
                      placeholder="Search playlists"
                      aria-label="Search"
                      onChange={(e) => {setSearch(e.target.value)}} value={search}
                       />
           </MDBCol>

           
          </center> 

        <div className="MenuContainer" >

         
            <div className="headingWrapper">
            <div>
        <h1 className="fHeading">Favorites</h1>
        </div>

        
        
        <button className="newPlaylist" onClick =
        {()=> setModal(true)}>
        Create New playlist</button>
        
        
        </div>

  
    

      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          <FavoritesItem/>
          <FavoritesItem1/>
          <FavoritesItem2/>
          <FavoritesItem3/>
          <FavoritesItem4/>
          <FavoritesItem5/>
          <FavoritesItem6/>
          <FavoritesItem7/>
        </Carousel>
      </div>
      </div>

     <PlaylistAll/>
             
             <button onClick={pdf} className="newPlaylist"><svg id="dwn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
          <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
          </svg><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{display:'none'}}></span> Download playlists</button>
        </React.Fragment>
        </div>

   </div>

    )
}

export default Favorites
