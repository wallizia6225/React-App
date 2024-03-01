import React from 'react'

const MainContactUsForm =()=> {
  return (
    <div className='container'>
      <h4>Contact Us</h4>
      <div class="container">
        <div class="row">
          <div class="col">
            
          <span class="label label-default">First Name*</span>
          <div class="input-group flex-nowrap">
            <input type="text" class="form-control" placeholder="Firstname" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <br/>

          <span class="label label-default">Email Address*</span>
          <div class="input-group flex-nowrap">
            <input type="email" class="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <br/>

          <span class="label label-default">Date of Birth of the person to be assessed*</span>
          <div class="input-group flex-nowrap">
            <input type="date" class="form-control"  aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <br/>

          <span class="label label-default">Prefered Date & Time to Contact You</span>
          <div class="input-group flex-nowrap">
            <input type="date" class="form-control"  aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <br/>

          </div>
          
          <div class="col">

            <span class="label label-default">Last Name*</span>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="Last Name" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>

            <br/>
            <span class="label label-default">Phone Number*</span>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>

            <br/>
            <span class="label label-default">Details of The Type of Assessment Required*</span>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="Select Assessment Type" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>

            <br/>
            <span class="label label-default">Your Deadlines for the Medical Reports*</span>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="Select Date and Time" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
          </div>
        
          <div className='container'>
          <br/>
          <span class="label label-default">Your Message</span>
          <div class="form-floating">
            <textarea class="form-control"></textarea>
            <label for="floatingTextarea">Any Other Information You Think Is Necessary, please share in this section ...</label>
          </div>
          </div>  
          <br/> 
          <br/> 
          <br/> 


          <div className="container" style={{ paddingRight: 80 }}>
            <input class="form-check-input" type="checkbox" id="check1" name="option1"/>
            <label class="form-check-label">I authorize doc-desk to hold and process my personal information to be able to contact me for onboarding and other product related emails.</label>
            <br/>
            <input class="form-check-input" type="checkbox" id="check2" name="option2"/>
            <label class="form-check-label">By registering, you agree to our Privacy Policy and Terms of Use.</label>
          </div>

          <br/><br/>
          <button type="button" class="btn btn-warning btn-lg btn-block">Book an Appointment</button>
        </div>
      </div>
    </div>
  )
}

export default MainContactUsForm
