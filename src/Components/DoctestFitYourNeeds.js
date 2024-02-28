import React from 'react'


const DoctestFitYourNeeds = () => {
    const data = [
        { Headings: "Runs in Cloud or On-Premises", Description: "some text here", LogoUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain" },
        { Headings: "Runs in Cloud or On-Premises", Description: "some text here", LogoUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain" },
        { Headings: "Runs in Cloud or On-Premises", Description: "some text here", LogoUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain" }
      ];
    
      return (
        <div className="jumbotron text-center" style={{ backgroundColor: 'DarkBlue', color: '#fff' }}>
          <h2 style={{ paddingTop: 25}}>Doc-Desk fits your needs</h2>
          <hr/>
          <div className="row justify-content-center" style={{ paddingBottom: 50 }}>
            {data.map((item, index) => (
              <div key={index} className="col-md-4">
                <img src={item.LogoUrl} alt="Logo" style={{ maxWidth: '100px' }} />
                <h5>{item.Headings}</h5>
                <small>{item.Description}</small>
              </div>
            ))}
          </div>
        </div>
      );
}

export default DoctestFitYourNeeds
