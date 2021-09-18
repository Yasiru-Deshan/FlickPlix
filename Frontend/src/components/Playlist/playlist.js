import React,{ useEffect, useState, useRef} from 'react';
import PlaylistItem from './playlistitem';
import PlaylistItem1 from './playlistitem copy';
import PlaylistItem2 from './playlistitem copy 2';
import PlaylistItem3 from './playlistitem copy 3';
import Carousel from "react-elastic-carousel";
import './playlist.css';
import ListIcon from '@material-ui/icons/List';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import axios from 'axios';
import Modal from 'react-modal';
import { Form } from 'react-bootstrap';
import '../../pages/favorites/favorites.css';
import { useParams} from "react-router";






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
    //const id = props.id;
    const [mdal,setModal] = useState(false);
    const playlistid = useParams().playlistid;
    const [tname, settname] = useState("");
    const [pdesc, setpdesc] = useState("");
    const id = useParams().id;

     useEffect (() => {
        async function fetchData(){
            const response = (await axios.get(`http://localhost:8070/api/playlists/find/612382815f82f73b48d75104`)).data;
            settname(response.tname);
            setpdesc(response.pdesc);
           
        }
        fetchData();
    },[])

  const submitHandler  = async(e)=>{
      let update;

      e.preventDefault()
      const updatedPlaylist = {
        userId: '611b74dd16f8353848675308',
        name: tname,
        desc: pdesc,
      }

      try{
        update = await axios.put(`http://localhost:8070/api/playlists/edit/612382815f82f73b48d75104`,updatedPlaylist)

         if (update){
       window.alert("Play list has been updated")
  }
      }catch(err){
        console.log(err)
      }
    }

  
    {/*const MyOptions = [
      "",
      "Edit Playlist",
      "Delete playlist",
      "Save as PDF",
    ];

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const open = Boolean(anchorEl);
    
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  */}

  const deletePlaylist = async (id) => {
    let deletion;
    

    if (window.confirm("Are you sure about deleting this playlist?")) {
      deletion = await axios.delete(`http://localhost:8070/api/playlists/delete/${id}`);
    }
    //const deletion = await axios.delete(`http://localhost:8070/customers/delete/${id}`);
  if (deletion){
       window.alert("Play list has been deleted")
  }
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
                         
                        
                          onChange={(e) => {settname(e.target.value);}} 
                          value={tname}
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
</div>

<div><p className="playDesc">{props.desc}</p></div>

<div className="carousel">
<Carousel breakPoints={breakPoints}>
<PlaylistItem/>
<PlaylistItem1/>
<PlaylistItem2/>
<PlaylistItem3/>


</Carousel>
</div>
<div className="uebtn">
<Button
              variant="contained"
              color="secondary"
              onClick={() => deletePlaylist()}
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
