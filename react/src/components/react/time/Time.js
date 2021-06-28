import React from 'react'
import { useState } from "react";
import { useEffect,useRef } from "react/cjs/react.development";
import moment from 'moment';
var dayjs = require('dayjs')
const Time = () => {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-1`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
    };

     const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
        return;
        }

        timerComponents.push(
        <span>
            {timeLeft[interval]} {interval}{" "}
        </span>
        );
    });

    return (
        <div className='content time-format'>
            <h3>TIME FORMAT</h3>
            <div className='content-body'>
                <h4>DAY JS</h4>
                <div>
                    <p>{dayjs('2019-01-25').format('DD/MM/YYYY')}</p>
                    <p>{dayjs(Date.now()).format()}</p>
                    <p>{dayjs(Date.now()).format('DD-MM-YYYY')}</p>
                    <p>{dayjs(Date.now()).add(7, 'day').format('DD-MM-YYYY')}</p>
                </div>
                <h4>MOMENT</h4>
                <div>
                    <p>{moment(Date.now()).format()}</p>
                    <p>{moment(Date.now()).format('DD-MM-YYYY')}</p>
                    <p>{moment(Date.now()).add(7, 'day').format('DD-MM-YYYY')}</p>
                </div>
            </div>

            <div>
                <h1>HacktoberFest {year} Countdown</h1>
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>

        </div>
    )
}

export default Time
