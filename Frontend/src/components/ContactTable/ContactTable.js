import React,{useState, useEffect} from 'react';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';
import './ContactTable.css';
import '../../css/it19184722.css';
import axios from 'axios';

export default function Order(){

        let [search, setSearch] = useState("");
        let [msg,setMsg] = useState([]);
        let [Status, setStatus] = useState("");
        
        useEffect(()=>{
            function viewMsg(){
                axios.get("http://localhost:8070/admin/viewmsg").then((res)=>{
                  setMsg(res.data);              
                }).catch((err)=>{
                    alert(err.message);
                })
            }
            viewMsg();
        },[])


        //search filter
        if(search.length > 0){
          msg = msg.filter((i) => {
              return i.fullName.toLowerCase().match(search.toLowerCase());
          });
        }

        //Assign status
        const getStatus = e=>{setStatus(e.target.value);}

        const assignStatus = async(id,fullName) => {
        let assign;
     
        if(window.confirm("Are you "+ Status +" Customer : " + fullName + "'s message?")){
          assign = await axios.post(`http://localhost:8070/admin/viewmsg/status`,{id,Status});
        }
        if(assign) {
            localStorage.setItem('NewStatus', "Assigned status to " + fullName +"'s, message, successfully!");
            window.location = "/admin/viewmsg"
        }
           
      }

      //Delete message
        const deleteMsg = async(id,fullName) => {
          let deletion;
          
          if(window.confirm("Are you sure about deleting " + fullName + "'s message?")){
              deletion = await axios.delete(`http://localhost:8070/admin/viewmsg/delete/${id}`);
          }
          if(deletion) {
              localStorage.setItem('deleteMsg', "message record of " + fullName +", was deleted successfully!");
              window.location = "/admin/viewmsg"
          }
           
      }


        //Generate Received Messages report
        const pdf = () => {
          const loading = document.getElementById('loading');
          loading.style.display = "";//display loading icon
          const dwnIcon = document.getElementById('dwn-icon');
          dwnIcon.style.display = "none";//hide download icn
  
          setTimeout(() => {  
              loading.style.display = "none";
              dwnIcon.style.display = "";
          }, 1300);//display loading icon for 2 seconds  
  
          let bodyData = [];
          for(let i = 0; msg.length > i ; i++){
              bodyData.push([msg[i].fullName, msg[i].email,"0"+msg[i].phoneNo, msg[i].status]);
          }//save json data to bodydata in order to print in the pdf table
  
          const doc = new jsPDF({orientation:"portrait"});
          var time = new Date().toLocaleString();
          doc.setFontSize(20);
          doc.text(`Received Messages Report`, 105, 13, null, null, "center");
          doc.setFontSize(10);
          doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
          doc.setFontSize(12);
          doc.text("FlickPlix © 2021 All rights reserved", 105, 22, null, null, "center");
          
          doc.autoTable({
              theme : 'grid',
              styles: {halign:'center'},
              headStyles:{fillColor:[71, 201, 76]},
              startY:27,
              head: [['User Name','Email','Phone No','Status']],
              body: bodyData
          })
          doc.save('ReceivedMessagesReport.pdf');
      }


      
        return (
		

      <body className="it19184722-myForm-adminDashboard">
            
          <h2 className="it19184722-h2">Contact Management Dashboard</h2>

          {/* Generate Report */}
          <div className="it19184722-headerSection">
          <button onClick={pdf} className="btn it19184722-trans-green-btn"><svg id="dwn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
          <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
          </svg><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{display:'none'}}></span> Download</button>
          
          {/* Search filter */}
          <input id="it19184722-search-filter" className="form-control" type="text" placeholder="Search by Customer name" onChange={(e) => {setSearch(e.target.value)}} value={search}/>
          </div>

          <form>    
            {msg.map
                    (post =>
                      <div className="row justify-content-center ">
                      <div className="col-xl-10">
                
              <div className="it19184722-contacttbl">
                  <div className="card-h-label">
                    <label className="mb-1">Date :  {post.createdAt}</label><br/>
                    <label className="mb-1">Contact Id : {post._id}</label>
                  </div>
                <div className="card-body pt-0">
                    <hr className="my-0" />

                    <label className="mb-1">Full Name : {post.fullName}</label><br/>
                    <label className="mb-1">Email : {post.email}</label><br/>
                    <label className="mb-1">Phone Number :  {post.phoneNo}</label><br/><br/>
                
                <hr className="my-2" />

                 <p className="mb-1">Message : <br/>{post.message}</p><br/>

                <hr className="my-2" />

                    <label className="mb-1">Assign a status : </label>
                         
                    <select value={Status} onChange={getStatus} name="approval" id="status">
                            <option>{post.status}</option>
                            <option value='Not Processed'>Not Processed</option>
                            <option value='Accepted'>Accepted</option>
                            <option value='Seen'>Seen</option>
                            <option value='Rejected'>Rejected</option>
                    </select>
                </div>
                  {/* Delete status */}
                    <button onClick={() => deleteMsg(post._id,post.fullName)} className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>
                    Delete</button>

                  {/* Assign status */}
                  <button type="submit" onClick={() => assignStatus(post._id,post.fullName)} name id className="btn btn-primary float-right">CONFIRM</button> 
                </div>
              </div>
            </div>
            )}
          </form>
  </body>
  )
}
