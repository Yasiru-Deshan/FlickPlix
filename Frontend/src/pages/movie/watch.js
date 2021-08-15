import React from 'react';
import ReactPlayer from 'react-player';
import "./movie.css"

function Watch() {
    return (
        <div className="playercontainer" style={{backgroundColor: "#000"}}>
.
        

        <div className="watchplayer">

       <ReactPlayer 
          width="100%"
          height="720px"
          controls
          url="https://youtu.be/EMzgOCHzPMs"/>

            
        </div>
        .
        </div>
    )
}

export default Watch








