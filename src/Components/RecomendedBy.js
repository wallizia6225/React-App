import React from 'react'

function RecomendedBy() {
    let recomendedBy = [
        { logo: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain"},
        { logo: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain"},
        { logo: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain"},
        { logo: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain"},
        { logo: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain"}
      ]
      function renderClients(){
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {
              recomendedBy.map((item, index) => (
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
          <p class="fs-3" style={{ textAlign: 'center' }}>Recomended By</p>
        </div><br />
        <div>
          {renderClients()}
        </div>
        </>
      )
}

export default RecomendedBy;
