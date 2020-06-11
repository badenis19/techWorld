import React from 'react';

import '../App.scss'

const Contact = () => {

  return (
    <div className="contact-container">
      <form>
        <h1 className="title">Contact Us</h1>
        <div className="container">
          <div className="row">
            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <label htmlFor="exampleInputName">Name</label>
              <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter full name"/>
            </div>
            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <label htmlFor="exampleInputPhoneNumber">Phone Number</label>
              <input type="text" className="form-control" id="exampleInputPhoneNumber" aria-describedby="phoneNumberHelp" placeholder="Enter phone number"/>
            </div>
            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label htmlFor="exampleInputSubject">Subject</label>
              <input type="text" className="form-control" id="exampleInputSubject" aria-describedby="SubjectHelp" placeholder="Subject"/>
            </div>


            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label htmlFor="exampleFormControlTextarea">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea" rows="3" placeholder="Your message"/>
            </div>

            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default Contact;
