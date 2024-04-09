import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './x-clock.css'
type XClockProps = {
    title: string;
  };
export default function XClock(props:XClockProps){

    const [time,setTime] = useState(moment().format('YYYY年MM月HH:mm:ss'));
    useEffect(()=>{
        setTimeout(() => {
            setTime(moment().format('YYYY年MM月HH:mm:ss'))
        }, 1000);
    },[time])
    console.log(time);
    
    return <div className="clock">
        <p>{props.title} {time}</p>
    </div>
}