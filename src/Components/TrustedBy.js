import React from 'react'

const TrustedBy = () => {
  const data = [
    { Headings: "Runs in Cloud or On-Premises", Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", LogoUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain" },
    { Headings: "Runs in Cloud or On-Premises", Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", LogoUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain" },
    { Headings: "Runs in Cloud or On-Premises", Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", LogoUrl: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain" }
  ];
  
  return (
    <div className="jumbotron text-center">
      <h2 style={{ paddingTop: 25}}>Trusted By 300+ Verified Practices</h2>
      <hr/>
      <div className="row justify-content-center" style={{ paddingBottom: 50 }}>
        {data.map((item, index) => (
          <div key={index} className="col-md-4">
            <img src={item.LogoUrl} alt="Logo" style={{ width:50, height: 50 }} />
            <small style={{ marginLeft: 50, textAlign: 'left' }}>{item.Description}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustedBy;
