'use client'

import { format, getDay, parse, startOfWeek } from 'date-fns'
import { ko } from 'date-fns/locale'
import { Calendar, ToolbarProps, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Popover, PopoverContent, PopoverTrigger } from '@packages/ui/components/popover'

import { Event } from './types/calendar.type'

const locales = {
  ko: ko
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
const CustomToolbar = ({ onNavigate, label }: ToolbarProps<Event>) => {
  return (
    <div className='flex justify-between text-black items-center p-2'>
      <div className='tooltip-wrapper'>
        <button
          onClick={() => onNavigate('PREV')} // as NavigateAction 제거, 직접 호출
          className='p-2 rounded-lg hover:bg-gray-100 transition-colors tooltip-trigger'
          data-tooltip='이전 달'
        >
          ←
        </button>
      </div>
      <span className='text-lg font-medium'>{label}</span>
      <div className='tooltip-wrapper'>
        <button
          onClick={() => onNavigate('NEXT')} // as NavigateAction 제거, 직접 호출
          className='p-2 rounded-lg hover:bg-gray-100 transition-colors tooltip-trigger'
          data-tooltip='다음 달'
        >
          →
        </button>
      </div>
    </div>
  )
}
const CustomEvent = ({ event }: { event: Event }) => {
  return (
    <Popover>
      <PopoverTrigger className='w-full h-full px-1 cursor-pointer overflow-hidden text-black text-ellipsis'>{event.title}</PopoverTrigger>
      <PopoverContent className='w-80 text-black'>
        <div className='space-y-4'>
          <div>
            <h3 className='font-medium mb-1'>{event.title}</h3>
            <p className='text-sm text-gray-500'>
              {format(event.start, 'yyyy년 MM월 dd일 HH:mm', { locale: ko })} -{format(event.end, 'MM월 dd일 HH:mm', { locale: ko })}
            </p>
          </div>
          <div>
            <p className='text-sm text-gray-800 whitespace-pre-wrap'>{event.content}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

const eventStyleGetter = (event: Event) => {
  return {
    style: {
      height: '20px',
      backgroundColor: event.color || '#4F46E5',
      borderRadius: '6px',
      opacity: 0.95,
      color: '#fff',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      padding: 0
    }
  }
}

const dayPropGetter = (date: Date) => {
  const today = new Date()
  if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
    return {
      style: {
        backgroundColor: '#F3F4F6',
        textColor: 'white',
        borderRadius: '8px'
      }
    }
  }
  return {}
}
function CustomCalendar({ events }: { events: Event[] }) {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor='start'
      endAccessor='end'
      style={{ height: 'calc(100%)' }}
      defaultView='month'
      views={['month']}
      eventPropGetter={eventStyleGetter}
      dayPropGetter={dayPropGetter}
      components={{
        toolbar: CustomToolbar,
        event: CustomEvent
      }}
      messages={{
        noEventsInRange: '해당 기간에 일정이 없습니다.',
        next: '다음',
        previous: '이전',
        today: '오늘',
        month: '월',
        week: '주',
        day: '일'
      }}
    />
  )
}
export { CustomCalendar }
