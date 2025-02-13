'use client'

import { leftSideElementProps } from '@/types'
import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  item: leftSideElementProps
  isActive: boolean
  onClick: () => void
  isOpen: boolean
}

export function NavItem({ item, isActive, onClick, isOpen }: NavItemProps) {
  const hasChildren = item.children && item.children.length > 0
  const path = usePathname()

  return (
    <div className='px-1 w-full divide-y'>
      <div
        className={`flex flex-col items-center py-2 pl-2 duration-150 cursor-pointer`}
      >
        <div className='flex items-center w-full my-1' onClick={onClick}>
          <div className='text-base flex-1 text-primary font-semibold'>
            {item.title}
          </div>
          {hasChildren && (
            <div className='text-gray-500'>
              <ChevronDownIcon
                className={`w-6 h-6 transition-transform duration-150 ${
                  isOpen ? '' : '-rotate-90'
                }`}
              />
            </div>
          )}
        </div>
        {hasChildren && (
          <div
            className={`ml-2 w-full transition-all duration-300 px-1 ${
              isOpen ? 'max-h-96' : 'max-h-0'
            } overflow-hidden`}
          >
            <div className='flex flex-col pt-1'>
              {item.children?.map((child) => (
                <Link
                  key={child.to}
                  href={child.to}
                  className={`flex items-center py-2 pl-2 duration-150 rounded-sm ${
                    path === child.to
                      ? 'bg-gray-100 text-black font-semibold'
                      : ''
                  }`}
                >
                  <div className='text-sm'>{child.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
