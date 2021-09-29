import React,{ useEffect, useState, useRef} from 'react';
import './comment.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import Modal from 'react-modal';
import { Form } from 'react-bootstrap';
import Button from "@material-ui/core/Button";

function Comments(props) {
      const pid = props.id;
      const [mdal,setModal] = useState(false);
      const [pdesc, setpdesc] = useState("");

 const submitHandler  = async(e)=>{
      let update;

      e.preventDefault()
      const updatedComment = {
        userId: '611b74dd16f8353848675308',
        desc: pdesc,
        
      }

      try{
        update = await axios.put(`http://localhost:8070/api/comments/edit/${pid}`,updatedComment)

         if (update){
       window.alert("Your Comment has been updated")
  }
      }catch(err){
        console.log(err)
      }
    }





    const deleteComment = async (id) => {
    let deletion;

   {/*} const delComment ={
        //userId: "60dac2fe1eccfb27d8e1c774",
        userId:'611b74dd16f8353848675308'
    }*/}
    

    if (window.confirm("Are you sure about deleting this comment?")) {
      deletion = await axios.delete(`http://localhost:8070/api/comments/delete/${id}`);
    }
    //const deletion = await axios.delete(`http://localhost:8070/customers/delete/${id}`);
  if (deletion){
       window.alert("Comment has been deleted")
  }else{
      window.alert("Sorry! You can only delete your comments")
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
          <h1>Edit Comment</h1>
          <Form onSubmit={submitHandler}>

            <Form.Control type="text" 
                  
                        
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


            <div className="commentcontainer">
            <div className="commentsbox">
                <div className="commentboxwrapper">
                    <p className="author">{props.author}</p>     
                    <p className="commentbox">{props.desc}</p> 
                   <p className="deled"><EditIcon  onClick = {()=> setModal(true)}/><DeleteIcon  onClick={()=>deleteComment(props.id)}/></p>                </div>
            </div>

        
    
            </div>
            
        </div>
    )
}

export default Comments
