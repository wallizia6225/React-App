import React from 'react';

const Faqs = () => {
  const dataMap = [
    { Question: "Some Question here 1", Answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of rst line of Lorem Ipsum" },
    { Question: "Some Question here 2", Answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of rst line of Lorem Ipsum" },
    { Question: "Some Question here 3", Answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of rst line of Lorem Ipsum" },
    { Question: "Some Question here 4", Answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of rst line of Lorem Ipsum" },
    { Question: "Some Question here 5", Answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of rst line of Lorem Ipsum" }
  ];

  const imageUrl = "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain";

  let openIndex = null;

  const handleItemClick = (index) => {
    if (openIndex === index) {
      openIndex = null;
    } else {
      openIndex = index;
    }
    forceUpdate();
  };

  // A workaround to force re-render
  const [, forceUpdate] = React.useState();

  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ marginLeft: 65}}>
          <div className='primary'><h2>FAQs</h2></div>
          <div className="accordion" id="accordionExample">
            {dataMap.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={openIndex === index ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                    onClick={() => handleItemClick(index)}
                  >
                    {item.Question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>{item.Answer}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col">
          <img src={imageUrl} alt="Image" style={{ width: '300px', height: '450px', marginLeft: 105 }} />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
