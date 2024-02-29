import React from 'react'

const AboveFooter = () => {

    const data = [
        { text: "Some quick example text to build on the card title" },
        { text: "Some quick example text to build on the card title" },
        { text: "Some quick example text to build on the card title" },
        { text: "Some quick example text to build on the card title" }
      ];
    
      const renderCards = () => {
        return data.map((item, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card" style={{ height: 125 }}>
              <div className="card-block">
              <div class="container text-center">
                  <div class="row">
                    <div class="col-4">
                      <img src="https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain" style={{ width: 50, height: 50, marginTop: 15}}  />
                    </div>
                    <div class="col-8">
                      <p className="card-text p-y-1" style={{ textAlign: 'left' }}>{item.text}</p>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        ));
      };  


  return (
    <div className='container'>
        <div class="card">
            <div class="card-body">

            <div class="row">
              <div class="col">
              <h5 class="card-title">Unsure which license fits your needs?</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">We guide you through our plans in less than a minute</h6></div>
              <div class="col">
              <button class="btn btn-outline-primary me-2" type="button" style={{ marginLeft: 300 }}>Sign up for Services</button>
              </div>
            </div>

             
              <hr/>
              <div className="row">
                {renderCards()}
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboveFooter
