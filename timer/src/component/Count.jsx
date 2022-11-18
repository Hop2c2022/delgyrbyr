import { useEffect, useState } from 'react';

export const Start = () => {

    let [Count , setCount] = useState(0);
    let hours = 0;
    let minutes = 0;
    setCount = 0;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount = Count++ ;
    
        console.log(setCount);
        console.log(minutes)
    
        if(setCount===60) {
          minutes++
          Count = 0;
        };
        if(minutes===60) {
          hours++
          minutes = 0;
        };
  
        return () => clearInterval(interval);
  
      }, 2000);
    });
  
    return <div className='g'>
      <p>{hours}</p>
      <p>:</p>
      <p>{minutes}</p>
      <p>:</p>
      <p>{setCount}</p>
    </div>
  }
  