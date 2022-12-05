import React, { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ textAlign: 'center', fontSize: '3em' }}>
      {time}
    </div>
  );
}
