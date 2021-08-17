import React,{useState} from 'react';
import './ContactPage.css';
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

    
        return (

          <body className="DNbodyC">
                <form onSubmit={checkout}>
                <div className=" container-fluid my-5 ">
        <div className="row justify-content-center ">
         <div className="col-xl-10">
          <div className="card shadow-lg ">
                <div className="row p-2 mt-3 justify-content-between mx-sm-2">
                <div className="col">
                
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-5">
            <div className="card border-0">
              <div className="card-header pb-0">
                <h2 className="card-title space ">Send Us A Message</h2>
                <p className="card-text text-muted mt-4 space">We contact you soon...</p>
                <hr className="my-0" />
              </div>
              <div className="card-body">

                <div className="form-group"> <label  className="small text-muted mb-1">ENTER YOUR NAME</label> <input type="text" className="form-control form-control-sm" name="NAME" id="name" aria-describedby="helpId" placeholder="Enter your name" required onChange={(e)=>{
                                        setName(e.target.value);
                                    }}/> </div>

                <div className="form-group"> <label  className="small text-muted mb-1">DELIVERY ADDRESS</label> <input type="text" className="form-control form-control-sm" name="NAME" id="deliveryAddress" aria-describedby="helpId" placeholder="Enter your delivery address" required onChange={(e)=>{
                                        setDeliveryAddress(e.target.value);
                                    }}/> </div>

                <div className="form-group"> <label  className="small text-muted mb-1">PHONE NUMBER</label> <input type="text" className="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="Enter your phone number / Ex: 781234567" required onChange={(e)=>{
                                        setPhNo(e.target.value);
                                    }}/> </div>
                 
                <div className="row mb-md-5">
                  <div className="col"> <button type="submit" name id className="btn btn-lg btn-block ">PLACE THE ORDER</button> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card border-0 ">
              <div className="card-body pt-0">
                add image here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
</body>      
        );
}