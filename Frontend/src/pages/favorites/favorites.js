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




const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];


function Favorites() {

    const name = useRef();
    const desc = useRef();
    let [plist, setPlaylist] = useState([]);
    const [mdal,setModal] = useState(false);
    let [search, setSearch] = useState("");

    const submitHandler  = async(e)=>{
      e.preventDefault()
      const newPlaylist = {
        userId: '611b74dd16f8353848675308',
        name: name.current.value,
        desc: desc.current.value,
      }

      try{
        await axios.post("http://localhost:8070/api/playlists/new", newPlaylist)
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
    
            
        </React.Fragment>
        </div>

   </div>

    )
}

export default Favorites
