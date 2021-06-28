import React, { useState, Fragment } from "react";
import Repeatable from "react-repeatable";
const HoldBtn = () => {
  const [count, setCount] = useState(1);
  const countDown = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count === 1) {
      setCount(999);
    }
  };
  const countUp = () => {
    if (count < 999) {
      setCount(count + 1);
    } else if (count === 999) {
      setCount(1);
    }
  };
  return (
    <div className='content hold-btn'>
      <div className="holdBtn">
        <h3>HOLD BUTTON</h3>

        <div className='content-body'>
          <a href="https://github.com/cheton/react-repeatable">
            https://github.com/cheton/react-repeatable
          </a>
          <p>npm install --save react-repeatable </p>
          <br></br>
          <br></br>
          <div className='content-holdBtn'>
            <Repeatable className="count-items" onClick={countDown} onHold={countDown} >
              <span> - </span>
            </Repeatable>

            <span> {count} </span>

            <Repeatable className="count-items" onClick={countUp} onHold={countUp}>
              <span> + </span>
            </Repeatable>
          </div>
        </div>
    </div>
    </div>

  )
}

export default HoldBtn
