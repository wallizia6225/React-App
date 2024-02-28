import React from 'react'

const Faqs =()=> {

    function getRandomText() {
      // Generate random text for demo purposes
      const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
      const words = lorem.split(' ');
      const randomIndex = Math.floor(Math.random() * words.length);
      return words.slice(randomIndex, randomIndex + 5).join(' ');
    }
    
    const AccordionItemsFunc = () => {
      var accordionItems = [];
      
      // Create 5 accordion items
      for (let i = 0; i < 5; i++) {
        accordionItems.push(
          <div className="accordion-item" key={i}>
            <h2 className="accordion-header" id={`heading-${i}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${i}`} aria-expanded="false" aria-controls={`collapse-${i}`}>
                {getRandomText()} {/* Random text for heading */}
              </button>
            </h2>
            <div id={`collapse-${i}`} className="accordion-collapse collapse" aria-labelledby={`heading-${i}`} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {getRandomText()} {/* Random text for body */}
              </div>
            </div>
          </div>
        );
      }
    
      return (
        <div className="row">
          <div className="col-md-6">
            <div className="accordion" id="accordionExample">
              {AccordionItemsFunc()}
            </div>
          </div>
          <div className="col-md-6">
            haha
          </div>
        </div>
      );
    }    
}

export default Faqs;
