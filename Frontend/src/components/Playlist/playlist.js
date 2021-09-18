import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import axios from 'axios';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';



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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [heading,setHeading] = useState("");
    const [desc,setDesc] = useState("");
    const id = props.match.params.id;

     const idx = props.id;
  
    const MyOptions = [
      "",
      "Edit Playlist",
      "Delete playlist",
      "Save as PDF",
    ];


   useEffect (() => {
        async function fetchData(){
            const response = (await axios.get(`http://localhost:8070/customers/edit/${id}`)).data;
            setHeading(response.heading);
            setDesc(response.desc);  
        }
        fetchData();
    },[id])




    

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



    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const open = Boolean(anchorEl);
    
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>


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
              onClick={() => deletePlaylist(idx)}
              className={classes.button}
              startIcon={<DeleteIcon />
              }>Delete</Button>
<Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<Icon/>}>Edit</Button>

<Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon></Icon>}
            >
              Save
            </Button>
</div>

        
        </div>
        </div>
    );
      
}

export default Playlist
