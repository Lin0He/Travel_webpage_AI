import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calendar.css";
const CalendarOut = () => {
  const [date, setDate] = useState(new Date());
  return (

    <div >
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  )
}

export default CalendarOut