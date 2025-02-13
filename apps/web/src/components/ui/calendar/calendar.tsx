'use client'

import supabaseClient from '@/utils/supabase/supabase'
import { useEffect, useState } from 'react'

import { Event } from '@types'

import { getDataFromTable } from '@utils'

import './calendar.css'
import { CustomCalendar } from './customCalendar'

export function CalendarView() {
  const supabase = supabaseClient()
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    async function fetchEvent() {
      try {
        const data = await getDataFromTable<Event>(supabase, 'schedule')
        const formattedEvents = data.map((event) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end)
        }))
        setEvents(formattedEvents)
      } catch (error) {
        console.error('일정을 불러오는데 실패했습니다:', error)
      }
    }
    fetchEvent()
  }, [supabase])
  return (
    <div className='calendar-wrapper h-full max-w-5xl mx-auto w-full'>
      <div className='calendar-container bg-gray-50 rounded-md h-full'>
        <CustomCalendar events={events} />
      </div>
    </div>
  )
}
