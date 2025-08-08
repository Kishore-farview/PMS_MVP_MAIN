import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

   useEffect(() => {
    const now = new Date(); // Or use `new Date()` for current date/time

    // US timezone (Eastern Time)
    const timeZone = 'America/New_York';

    // Get parts separately
    const weekday = now.toLocaleDateString('en-US', {
      weekday: 'long',
      timeZone,
    });

    const dayOfMonth = now.toLocaleDateString('en-US', {
      day: 'numeric',
      timeZone,
    });

    const month = now.toLocaleDateString('en-US', {
      month: 'short',
      timeZone,
    });

    const year = now.toLocaleDateString('en-US', {
      year: 'numeric',
      timeZone,
    });

    const formattedDate = `${dayOfMonth} ${month} ${year}`; // 7 Aug 2025

    const formattedTime = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone,
    });

   setDay(weekday);
    setDate(formattedDate);
    setTime(formattedTime);
   
    
  }, []);
  console.log(date);
  
  return (
    <div>
      <p className='ml-10'> {day}</p>
      <p className='ml-8'> {date}</p>
      <p className='ml-11'> {time}</p>
    </div>
  )
}

export default DateTime
