import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, LogOutIcon, MoonIcon, SearchIcon, SendIcon, SettingsIcon, SunIcon, UserIcon, XIcon } from 'lucide-react'
import React from 'react'
import { forwardRef } from 'react'

interface IconWrapperProps {
  className?: string
  children: React.ReactElement
}

const IconWrapper = ({ className, children }: IconWrapperProps) => {
  const child = React.cloneElement(children, { className })
  return child
}

const createIcon = (Icon: React.ReactElement) => {
  /* eslint-disable-next-line react/display-name */
  return ({ className }: { className?: string }) => <IconWrapper className={className}>{Icon}</IconWrapper>
}

const icons = {
  chevronLeft: createIcon(<ChevronLeftIcon />),
  chevronRight: createIcon(<ChevronRightIcon />),
  darkMode: createIcon(<MoonIcon />),
  lightMode: createIcon(<SunIcon />),
  logout: createIcon(<LogOutIcon />),
  close: createIcon(<XIcon />),
  home: createIcon(<HomeIcon />),
  user: createIcon(<UserIcon />),
  settings: createIcon(<SettingsIcon />),
  send: createIcon(<SendIcon />),
  search: createIcon(<SearchIcon />)
}

export type IconName = keyof typeof icons

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: IconName
  description?: string
  text?: string
  isBox?: boolean
  className?: string
  iconClassName?: string
}

export const HIPCicon = forwardRef<HTMLDivElement, IconProps>(({ name, isBox = false, description, text, className, iconClassName = 'w-5 h-5', ...props }, ref) => {
  const IconComponent = icons[name]

  return (
    <div>
      <div ref={ref} className={`${isBox && 'flex'} group flex justify-center ${className}`} {...props}>
        <div className={iconClassName}>
          <IconComponent className='h-full w-full' />
        </div>
        {description && (
          <div className='invisible absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-text group-hover:visible'>
            {description}
          </div>
        )}
      </div>
      {text && <p className='text-center text-secondary'>{text}</p>}
    </div>
  )
})

HIPCicon.displayName = 'HIPCicon'
