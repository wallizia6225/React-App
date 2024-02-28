import React from 'react'

const MoreClientsSection = () => {
  let companyClients = [
    { logo: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain"},
    { logo: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain"},
    { logo: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain"},
    { logo: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain"},
  ]
  function renderClients(){
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {
          companyClients.map((item, index) => (
            <div key={index} style={{ margin: "0 10px" }}>
              <img src={item.logo} alt={`Company ${index + 1}`} style={{ width: 150, height: 150 }} />
            </div>
          ))
        }
      </div>
    );
  }
  return (
    <><div>
      <p class="fs-3" style={{ textAlign: 'center' }}>Trust Your Billing To The Company That Ranks In <br /> "Top 10 Medical Billing Companies" </p>
    </div><br />
    <div>
      {renderClients()}
    </div>
    </>
  )
}

export default MoreClientsSection
