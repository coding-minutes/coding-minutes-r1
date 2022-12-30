import React, { useState } from 'react'

import './FAQs.css'
import { FAQData } from '../../data/FAQData'

const FAQs = () => {
  const [whichClicked, setWhichClicked] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);
  const handleClick = (id) => () => {
    if (clickedArray.includes(id)) {
      setWhichClicked(id);
    } else {
      setClickedArray([...clickedArray, id]);
      setWhichClicked(id);
    }
  };
  const handleButtonClick = (id) => () => {
    if (clickedArray.includes(id)) {
      setClickedArray(clickedArray.filter((item) => item !== id));
      setWhichClicked(id);
    }
  };

  return (
    <div className="FAQ-outer-container">
      <div className="components-outer-container">
        <div className="FAQ-container" data-aos="fade-up">
          <div className="top">
            <h1>Frequently asked questions🤔</h1>
          </div>
          <div className="bottom">
            {FAQData.map((item) => {
              const { id, question, answer } = item;
              return (
                <div className="questions faq" key={id} onClick={handleClick(id)}>
                  <div className="question">
                    <p className="ques">{question}</p>
                    <button onClick={handleButtonClick}>{clickedArray.includes(id) ? " " :" "}</button>
                  </div>
                  {clickedArray.includes(id) && <p className="ans">{answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs