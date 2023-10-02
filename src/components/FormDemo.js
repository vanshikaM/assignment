import { useState } from "react";


const FormDemo = (props) => {

  const [name,setName] = useState();
  const [phone,setPhone] = useState();
  const [email,setEmail] = useState();
  const [company,setCompany] = useState();

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    props.onAlertHandler(`Thankyou ${name} for your enquiry.We will get back to you soon.`)
    
  }
  return (

     
    <div
      className="modal fade"
      id="formBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      
      <div className="modal-dialog">
        <div className="modal-content ">
          <div className="modal-header bg-primary">
            <h1 className="modal-title fs-5 text-white" id="staticBackdropLabel">
              Book Your Demo
            </h1>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row g-3" onSubmit={onSubmitHandler}>
            <div className="col-md-12">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name"  placeholder="Full Name*" value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>
      
              <div className="col-md-12">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input type="tel" className="form-control" id="phone" placeholder = "Mobile*" value={phone} onChange={(e)=>setPhone(e.target.value)} />
              </div>
      
              <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" placeholder="Email*" id="inputEmail4" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="col-md-12">
                <label htmlFor="company" className="form-label">
                  Company
                </label>
                <input type="text" className="form-control" placeholder="Company*" id="company" value={company} onChange={(e)=>setCompany(e.target.value)}/>
              </div>
      
              <div className="col-12">
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"> 
                  Submit
                </button>
              </div>
            </form>
          </div>
         </div>
       </div>
     </div>
  );
};

export default FormDemo;
