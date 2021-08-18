import React from 'react';
import './comment.css';

function Comments(props) {


    return (
        <div>

            <div className="commentcontainer">
            <div className="commentsbox">
                <div className="commentboxwrapper">
                    <p className="author">{props.author}</p>     
                    <p className="commentbox">{props.desc}</p> 
                </div>

            </div>

        
    
            </div>
            
        </div>
    )
}

export default Comments
