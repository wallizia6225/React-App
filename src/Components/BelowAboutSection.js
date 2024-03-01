import react from 'react'

const BelowAboutSection = () => {
    // This data needs to be fetched from the api that will be developed and handled throught the admin dashboard or stuff
    //For now I passed the static array
    // Sample data array containing objects for each card
    const data = [
      { title: "Cerified Coders", text: "Some quick example text to build on the card title"},
      { title: "Cerified Coders", text: "Some quick example text to build on the card title" },
      { title: "Experience", text: "Some quick example text to build on the card title" },
      { title: "Up To Date", text: "Some quick example text to build on the card title" },
    ];
  
    // Function to render cards
    const renderCards = () => {
      return data.map((item, index) => (
        <div className="col-md-4 mb-4" style={{ marginLeft: 35 }} key={index}>
          <div className="card" style={{ width: 350 }}>
            <div className="card-block">
            <div class="container text-center">
                <div class="row" style={{ width: 300 }}>
                  <div class="col-4">
                    <img src="https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain" style={{ width: 50, height: 50, marginTop: 15}}  />
                  </div>
                 
                  <div class="col-8">
                    <h4 className="card-title" style={{ textAlign: "left"}}>{item.title}</h4>
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
        <div className="container">
            <div class="row">
              <div class="col" style={{ paddingLeft: 100 }}>
                <br/><br/><br/>
              <h2>About Our Team</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar erat a interdum auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla maximus tortor nulla, in faucibus nisi aliquam at.
                    </p>
                    <p>
                      Ut vitae risus a quam porttitor semper. Aliquam erat volutpat. Donec eu lobortis turpis. nascetur ridiculus mus. Nulla maximus tortor nulla, in faucibus nisi aliquam at.
                    </p>
              </div>
              <div class="col">
                {renderCards()}
              </div>
            </div>
        </div>
    );
  };
  
  export default BelowAboutSection;
  