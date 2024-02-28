import React from 'react'


const KeyFeatures = () => {
    // Sample data array containing objects for each card
    const data = [
      { imageUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain", text: "Main Focus on Patient Care" },
      { imageUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain", text: "Reduce Admin Duties" },
      { imageUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain", text: "Enhanced Cash flow" },
      { imageUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain", text: "Reduced Billing Errors" },
      { imageUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain", text: "Improved Patient Satisfaction" },
      { imageUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain", text: "Secured Patient Data" },
      { imageUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain", text: "Billing Compilance" },
      { imageUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain", text: "Process Claims Faster" }
    ];
  
    // Function to render cards
    const renderCards = () => {
      return data.map((item, index) => (
        <div className="col-md-3 mb-4" key={index}>
         <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 250, height: 200, }}>
            <img src={item.imageUrl} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 10, marginTop: 30 }} alt="Card" />
            <div className="card-body">
              <p className="card-text">{item.text}</p>
            </div>
        </div>
        </div>
      ));
    };
  
    return (
      <div className="container">
        <div className="row">
          {renderCards()}
        </div>
      </div>
    );
  };
  
  export default KeyFeatures;
