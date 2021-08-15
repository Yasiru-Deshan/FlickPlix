import React from 'react'
import './comment.css'

function Comments() {
    return (
        <div>

            <div className="commentcontainer">
            <div className="commentsbox">
                <div className="commentboxwrapper">
                    <p className="author">Liam livingstone</p>
                    
                    <p className="commentbox">This is the worst i've ever watched</p> 
                </div>

            </div>

            <div className="commentsbox">
                <div className="commentboxwrapper">
                <p className="author">Jason Roy</p>

                <p className="commentbox">Overall fun but forgettable movie with plenty of blood for everyone!</p> 
                </div>

            </div>
    
            </div>
            
        </div>
    )
}

export default Comments
