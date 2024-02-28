import React from 'react'

const ContactUsForm = () => {
  return (
    <form className="row g-3" style={{ backgroundColor: 'blue', color: 'white' }}>
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="form-label" >Name</label>
      <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputPassword4" className="form-label">Email Address</label>
      <input type="password" className="form-control" id="inputPassword4" />
    </div>
    <div className="col-12">
      <label htmlFor="inputAddress" className="form-label">Phone Number*</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
    </div>
    <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Your message</label>
        <textarea className="form-control" id="inputZip" style={{width: '515px'}}/>
    </div>
    <div className="col-12">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          I authorize doc-test to hold and process my persoanl info.
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          By registering you agree to our privacy policy and terms of use.
        </label>
      </div>
    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-warning">Book an appointment</button>
    </div>
    <br/>    <br/>
    <br/>

  </form>
  )
}

export default ContactUsForm;