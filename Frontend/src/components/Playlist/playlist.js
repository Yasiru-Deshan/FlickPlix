import React from 'react';
import PlaylistItem from './playlistitem';
import Carousel from "react-elastic-carousel";
import './playlist.css';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

function Playlist(props) {
    return (
        <div>


<div className='container'>
         
<div className="headingWrapper">
<div>
<h1 className="pHeading">{props.name}</h1>
</div>

</div>
<div className="carousel">
<Carousel breakPoints={breakPoints}>
<PlaylistItem>One</PlaylistItem>
<PlaylistItem>Two</PlaylistItem>
<PlaylistItem>Three</PlaylistItem>
<PlaylistItem>Four</PlaylistItem>
<PlaylistItem>Five</PlaylistItem>
<PlaylistItem>Six</PlaylistItem>
<PlaylistItem>Seven</PlaylistItem>
<PlaylistItem>Eight</PlaylistItem>
</Carousel>
</div>

            
        </div>
        </div>
    )
}

export default Playlist
