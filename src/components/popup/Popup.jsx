import React from "react";
import "./popup.css"
import { GrClose } from 'react-icons/gr';
const Popup = ({show , Close}) => {
  const [timerHours, setTimerHours] = React.useState('00');
  const [timerMinutes, setTimerMinutes] = React.useState('00');
  const [timerSeconds, setTimerSeconds] = React.useState('00');
  let Interval = React.useRef();
  const startTimer = () => {
    const countdownDate = new Date('October 17, 2022 00:00:00').getTime();
     Interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      if(distance < 0) {
        //stop our timer
        clearInterval(Interval.current);
      } else {
        //update timer
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  React.useEffect(() => {
    startTimer();
    return () => {
      clearInterval(Interval.current);
    }
  });
  if(!show) {
   return null;
  }

  
    return (
    <div className='Top'>
        
        <div className='popup'>
        <div className="popup-heading">
            <h1>Hurry Up!</h1>
            <p>Diwali's Week Sale is Ending Tonight!</p>
        </div>
        <GrClose className="close" onClick={Close}/>
        <div className="timer-container">
          <div className='timebox'>
            <p className='Number'>     {
                timerHours<10?0 : null 
                }
                {timerHours}</p>
            <small>Hours</small>
          </div>
          <span>:</span>
          <div className='timebox'>
            <p className='Number'>     
            {
                timerMinutes<10?0 : null 
                }
                {timerMinutes}</p>
           <small>Minutes</small>
          </div>
          <span>:</span>
          <div className='timebox'>
            <p className='Number'>
                {
                timerSeconds<10?0 : null 
                }
                {timerSeconds}
               </p>
            <small>Seconds</small>
          </div>
        </div>
        <div className="popup-footer">
            <p>Only Few Spots Reamaining</p>
            <a href="#courses" alt="button" onClick={Close}>Enroll at 90% Discount</a>
        </div>
        </div>
    </div>
  )
}

export default Popup