import React,{useState} from 'react';
import './test.css';
import axios from 'axios';

export default function Checkout(){

        const [name,setName] = useState("");
        const [deliveryAddress, setDeliveryAddress] = useState("");
        const [phNo, setPhNo] = useState("");

        
        function checkout(e){
                e.preventDefault();

                const newCheckout ={
                        name,
                        deliveryAddress,
                        phNo  
                }

                axios.post("http://localhost:5000/api/cart/checkout", newCheckout).then(()=>{
                        alert("You placed order, Successfully");
                }).catch((err)=>{
                        alert(err);
                })
        }

    
        return (<>
            <link
              href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
              rel="stylesheet"
              id="bootstrap-css"
            />
            {/*---- Include the above in your HEAD tag --------*/}
            <link
              href="https://fonts.googleapis.com/css?family=Oleo+Script:400,700"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Teko:400,700"
              rel="stylesheet"
            />
            <link
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
            />
            <section id="contact">
              <div className="section-content">
                <h1 className="section-header">
                  Get in{" "}
                  <span
                    className="content-header wow fadeIn "
                    data-wow-delay="0.2s"
                    data-wow-duration="2s"
                  >
                    {" "}
                    Touch with us
                  </span>
                </h1>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry
                </h3>
              </div>
              <div className="contact-section">
                <div className="container">
                  <form>
                    <div className="col-md-6 form-line">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername">Your name</label>
                        <input
                          type="text"
                          className="form-control"
                          id
                          placeholder=" Enter Name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail"
                          placeholder=" Enter Email id"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="telephone">Mobile No.</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="telephone"
                          placeholder=" Enter 10-digit mobile no."
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="description"> Message</label>
                        <textarea
                          className="form-control"
                          id="description"
                          placeholder="Enter Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <div>
                        <button type="button" className="btn btn-default submit">
                          <i className="fa fa-paper-plane" aria-hidden="true" /> Send
                          Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </>
          
        );
}