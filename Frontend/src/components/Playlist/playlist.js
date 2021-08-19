import React from 'react';
import PlaylistItem from './playlistitem';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

function Playlist() {
    return (
        <div>



         
<div className="headingWrapper">
<div>
<h1 className="fHeading">Favorites</h1>
</div>
<div>
<button className="newPlaylist">Create New playlist</button></div>
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
    )
}

export default Playlist
