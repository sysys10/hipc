'use client'

import { CustomCalendar } from './CustomCalendar'
import './calendar.css'
import { useCalendarEvent } from './hooks/useCalendarEvent'

export default function Calendar() {
  const { events } = useCalendarEvent()
  return (
    <div className='calendar-wrapper h-full max-w-5xl mx-auto w-full px-2'>
      <div className='calendar-container rounded-md h-full'>
        <CustomCalendar events={events} />
      </div>
    </div>
  )
}
