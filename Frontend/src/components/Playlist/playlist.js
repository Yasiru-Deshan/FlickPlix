import React,{ useEffect, useState} from 'react';
import Carousel from "react-elastic-carousel";
import './playlist.css';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Modal from 'react-modal';
import { Form } from 'react-bootstrap';
import '../../pages/favorites/favorites.css';
import PlayListItem from './playlistitem';
import {jsPDF} from 'jspdf';
//import ListIcon from '@material-ui/icons/List';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
//import IconButton from "@material-ui/core/IconButton";
//import MenuItem from "@material-ui/core/MenuItem";
//import Menu from "@material-ui/core/Menu";



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


function Playlist(props) {
    const classes = useStyles();
    const pid = props.id;
    const [mdal,setModal] = useState(false);
    const [tname, settname] = useState("");
    const [pdesc, setpdesc] = useState("");
    const [favs,setFavs]  = useState([]);
    const [pMovies,setPMovies] = useState([]);


     useEffect(()=>{

      const getFavs = () =>{
        axios.get('http://localhost:8070/api/favorites/allfavs').then((res)=>{
          setFavs(res.data);
        })
      }

      getFavs();
    },[])

    const FavoritesAll = ()=>{
      return favs.map((mName)=>{

        return(
          <PlayListItem
               key = {mName.id}
               id  =   {mName.movieId}
              title = {mName.title}
                img = {mName.img}
                year={mName.year}
                type={mName.genre}  
                />
        )
      })
    }
    

  useEffect (() => {
        async function fetchData(){
            const response = (await axios.get(`http://localhost:8070/api/playlists/find/${props.id}`)).data;
            settname(response.name);
            setpdesc(response.desc);
            setPMovies(response.movies);
           
        }
        fetchData();
    },[])

    
    const PlayListMovies = ()=>{
      return pMovies.map((lName)=>{

        return(
          <PlayListItem
               key = {lName.id}
               id  =   {lName._id}
              title = {lName.title}
                image = {lName.img}
                year={lName.year}
                type={lName.genre}  
                />
        )
      })
    }

  const submitHandler  = async(e)=>{
      let update;

      e.preventDefault()
      const updatedPlaylist = {
        userId: '611b74dd16f8353848675308',
        name: tname,
        desc: pdesc,
        
      }

      try{
        update = await axios.put(`http://localhost:8070/api/playlists/edit/${pid}`,updatedPlaylist)

         if (update){
       window.alert(`${props.name} Play list has been updated`)
  }
      }catch(err){
        console.log(err)
      }
    }


  const deletePlaylist = async (id) => {
    let deletion;
    

    if (window.confirm(`Are you sure about deleting playlist ${props.name}?`)) {
      deletion = await axios.delete(`http://localhost:8070/api/playlists/delete/${id}`);
    }
  
  if (deletion){
       window.alert(`${props.name} Play list has been deleted`)
  }
  }
  
   //generate report of movies in the playlist 
    const pdf = () => {
        
  
          let bodyData = [];
          for(let j = 0;pMovies.length > j ; j++){
              bodyData.push([ pMovies[j].title,pMovies[j].year,pMovies[j].type]);
          }//save json data to bodydata in order to print in the pdf table
  
          const doc = new jsPDF({orientation:"portrait"});
          var time = new Date().toLocaleString();
          doc.setFontSize(20);
          doc.text(`${props.name}-Playlist`, 105, 13, null, null, "center");
          doc.setFontSize(10);
          doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
          doc.setFontSize(12);
          doc.text("FlickPlix © 2021 All rights reserved.", 105, 22, null, null, "center");
          
          doc.autoTable({
              theme : 'grid',
              styles: {halign:'center'},
              headStyles:{fillColor:[71, 201, 76]},
              startY:27,
              head: [['Movie Title','Year','Genre']],
              body: bodyData
          })
          doc.save(`${props.name}-playlist.pdf`);
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
          <h1>Edit Playlist</h1>
          <Form onSubmit={submitHandler}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
                        
                         value={tname}
                          onChange={(e) => {settname(e.target.value);}} 
                         
                          />

            <Form.Label>Description</Form.Label>
            <Form.Control type="text" 
                           value={pdesc}
                          
                        
                          onChange={(e) => {setpdesc(e.target.value);}}
                        
                          />
           <Button variant="primary" onClick={()=>setModal(false)}>
             Close
            </Button>
            <Button variant="primary" type="submit">
             Update
            </Button>
           
          </Form>
        </Modal>


<div className='container'>

         
<div className="headingWrapper">
<div>
<h1 className="pHeading">{props.name}</h1>
</div>

     {/* <IconButton
        aria-label="more"
        onClick={handleClick}
        aria-haspopup="true"
        aria-controls="long-menu"
        className="pdbtn"
      >
<div><MoreVertIcon/>
</div>
 </IconButton>
      <Menu 
        anchorEl={anchorEl} 
        keepMounted onClose={handleClose} 
        open={open}>
        {MyOptions.map((option) => (
          <MenuItem
            key={option} 
            onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
*/}
<div><p className="playDesc">{props.desc}</p></div>
</div>



<div className="carousel">
<Carousel breakPoints={breakPoints}>

<PlayListMovies/>

</Carousel>
</div>
<div className="uebtn">
<Button
              variant="contained"
              color="secondary"
              onClick={() => deletePlaylist(props.id)}
              className={classes.button}
              startIcon={<DeleteIcon />
              }>Delete</Button>
<Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick = {()=> setModal(true)}
              startIcon={<EditIcon/>}>Edit</Button>

<Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={pdf}
              endIcon={<BookmarkIcon></BookmarkIcon>}
            >
              Save
            </Button>
</div>

        
        </div>
        </div>
    );
      
}

export default Playlist
