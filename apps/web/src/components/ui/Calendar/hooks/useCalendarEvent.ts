import { getDataFromTable } from '@/utils'
import supabaseClient from '@/utils/supabase/supabase'
import { useState } from 'react'
import { useEffect } from 'react'

import { Event } from '../types/calendar.type'

export const useCalendarEvent = () => {
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

  return { events }
}
