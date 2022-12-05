import React, { useEffect } from 'react';

export default function Clock({ time, setTime }) {
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div style={{ textAlign: 'center', fontSize: '3em' }}>
      {time}
    </div>
  );
}
