import React from 'react'
import { IoIosArrowForward, IoIosCalendar } from "react-icons/io";

const DateAndTime = ({title, subheading}) => {
  return (
    <div>
        <div className='event-detail-icon-holder'>
            <IoIosCalendar size={50}/>
        </div>

        <h1 className='event-detail-datetime-title'>
            {title}
        </h1>

        <h3 className='event-detail-datetime-subheading'>
            {subheading}
        </h3>

        <IoIosArrowForward size={20} className='event-detail-arrow'/>
    </div>
  )
}

DateAndTime.defaultProps = {
    title: "18 August 6:00PM",
    subheading: "to 19 August 1:00PM UTC +10",
}

export default DateAndTime