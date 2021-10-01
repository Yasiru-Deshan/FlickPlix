import React,{useState} from 'react';
import './ContactPage.css';
import axios from 'axios';

export default function Contact(){

        const [fullName,setFullName] = useState("");
        const [email, setEmail] = useState("");
        const [phoneNo, setPhoneNo] = useState("");
        const [message,setMessage] = useState("");
        
        
        function contact(e){
                e.preventDefault();

                const newMessage ={
                  fullName,
                  email,
                  phoneNo,
                  message
                }

                axios.post("http://localhost:8070/contact", newMessage).then(()=>{
                        alert("You have sent message, Successfully");
                }).catch((err)=>{
                        alert(err);
                })
        }

    
        return (<>
            {/*---- Include the above in your HEAD tag --------*/}
            <link
              href="https://fonts.googleapis.com/css?family=Oleo+Script:400,700"
              rel="stylesheet"
            />
            <section id="it19184722-contact">
              <div className="it19184722-section-content">
                <h1 className="section-header">
                  Get in{" "}
                  <span
                    className="it19184722-content-header wow fadeIn "
                    data-wow-delay="0.2s"
                    data-wow-duration="2s"
                  >
                    {" "}
                    Touch with us
                  </span>
                </h1>
                <h3>
                  Stay With Us, We're Replying Your Messages, Quickly!
                </h3>
              </div>
              <div className="it19184722-contact-section">
                <div className="container dila">
                  <form onSubmit={contact}>
                    <div className="it19184722-col-md-6">
                      <div className="it19184722-form-group">
                        <label htmlFor="exampleInputUsername" className="it19184722-lbl">Tell Us Your Name</label>
                        <input
                          type="text"
                          className="form-control form-control-it19184722"
                          id
                          placeholder=" Enter Your Name"
                          required
                          onChange={(e)=>{
                            setFullName(e.target.value);
                        }}
                        />
                      </div>
                      <div className="it19184722-form-group">
                        <label htmlFor="exampleInputEmail" className="it19184722-lbl">Enter Your Email</label>
                        <input
                          type="email"
                          className="form-control form-control-it19184722"
                          id="exampleInputEmail"
                          placeholder=" Enter Your Email"
                          required
                          onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                        />
                      </div>
                      <div className="it19184722-form-group">
                        <label htmlFor="telephone" className="it19184722-lbl">Enter Phone Number</label>
                        <input
                          type="tel"
                          pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{3}"
                          className="form-control form-control-it19184722"
                          id="telephone"
                          placeholder=" Enter 9-digit mobile no./ Ex: 781234567"
                          required
                          onChange={(e)=>{
                            setPhoneNo(e.target.value);
                        }}
                        />
                      </div>
                      <div className="it19184722-form-group">
                        <label htmlFor="description" className="it19184722-lbl"> Message</label>
                        <textarea
                          className="form-control form-control-it19184722"
                          id="description"
                          placeholder="Enter Your Message"
                          defaultValue={""}
                          required
                          onChange={(e)=>{
                            setMessage(e.target.value);
                        }}
                        />
                      </div>
                    </div>
                    <div className="it19184722-col-md-6">
                        <button type="Submit" className="btn btn-danger float-right">
                          <i className="fa fa-paper-plane" aria-hidden="true" /> Send
                          Message
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </>
          
        );
}