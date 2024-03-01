import React from 'react'

const ContactWithGrid = () => {
    const items = [
        { imageUrl: 'https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain', text: 'Some text here Some text here Some text hereSome text here' },
        { imageUrl: 'https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain', text: 'Some text here Some text here Some text hereSome text here' },
        { imageUrl: 'https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain', text: 'Some text here Some text here Some text hereSome text here' },
        { imageUrl: 'https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain', text: 'Some text here Some text here Some text hereSome text here' }
      ];
    
      const renderItems = () => {
        return items.map((item, index) => (
          <div className="col-6 d-flex justify-content-center mb-4" key={index}>
            <div className="card">
              <div className="card-block">
                <div className="container text-center">
                  <div className="row">
                    <div className="col-4">
                      <img src={item.imageUrl} style={{ width: 50, height: 50, marginTop: 15, marginBottom: 15 }} alt="item" />
                    </div>
                    <div className="col-8">
                      <p className="card-text p-y-1">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));
      };



  return (
    <>
        <div style={{ textAlign: 'center' }}>
           <h1 style={{  marginTop: '50px', color: 'blue' }}>Contact Us</h1>
              <p style={{ marginBottom: '50px', color: 'black' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan turpis sed sem faucibus,<br/> in finibus odio interdum. sem faucibus, in finibus odio interdum.
              </p>
        </div>
        <div className="container">
            <div className="row">
                {renderItems()}
            </div>
        </div>
    </>
  )
}

export default ContactWithGrid
