import React, { useEffect, useState } from 'react';
import './j.css';

export const Start = () => {

  let [count , setCount] = useState(0);
  let [hours , setHours] = useState(0);
  let [minutes , setMinutes] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count+1);
  
      console.log(count);
      console.log(minutes)
  
      if(count===59) {
        setMinutes(minutes+1)
        setCount(count = 0)
      };
      if(minutes===59) {
        setHours(hours+1)
        setCount(count = 0)
      };

      // return () => clearInterval(interval);

    }, 990);
  },[count],[minutes],[hours]);

  return <div>
    {/* <button onClick={()=>setCount()}>start</button> */}
    <div className='g'>
    <p>{hours}</p>
    <p>:</p>
    <p>{minutes}</p>
    <p>:</p>
    <p>{count}</p>
    </div>
  </div> 
}
