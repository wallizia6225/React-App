import React from 'react'

const Footer = () => {
  return (
    <div class="footer" style={{ backgroundColor: 'blue', color: 'white', paddingTop: 50, paddingBottom: 50 }}> 
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div>
                    <h3>Contact</h3>
                    <p><i class="fa fa-phone-alt"></i>(281) 864-0448</p>
                    <p><i class="fa fa-envelope"></i>sales@rightmedicalbilling.com</p>
                    <p><i class="fa fa-map-marker-alt"></i>5530 Long Prairie Trace, Suite 600,<br/> Richmond,TX 77407</p>
                </div>
            </div>
            <div class="col-3">
                <div>
                    <h3>Our Hours</h3>
                    <div>Monday-Friday</div>
                    <div>8:30 AM - 5:00 AM</div>
                    <div><br/></div>
                    <div>Saturday, Sunday</div>
                    <div><bold>Closed</bold></div>
                </div>
            </div>
            <div class="col-3">
                <div>
                    <h3>Proudly Serving</h3>
                    <div>Healthcase Systems</div>
                    <div>Emergency Rooms</div>
                    <div>Urgent Care Centers</div>
                    <div>Hospitals</div>
                    <div>Private Practices</div>
                    <div>Speciality Clinics</div>
                </div>
            </div>
            <div class="col-3">
                <div>
                    <h3>Our Services</h3>
                    <div>Medical Billing & Coding</div>
                    <div>Medical Accounts Reciveable</div>
                    <div>Crediting & Contracting</div>
                    <div>Out of Network Negotiations</div>
                    <div>Prior Authorizations</div>
                    <div>Eligibility Verification</div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer
