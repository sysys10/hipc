'use client'

import {
  leftSideBottomElements,
  leftSideElements
} from '@/constatnts/navbar.constant'
import { usePathname } from 'next/navigation'
import router from 'next/router'
import { useState } from 'react'

import { NavItem } from './NavItem'

export function LeftSidebar() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemName: string) => {
    setOpenItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    )
  }

  const handleItemClick = (item: (typeof leftSideElements)[0]) => {
    if (item.children) {
      toggleItem(item.name)
    } else if (item.to) {
      router.push(item.to)
    }
  }
  const path = usePathname()

  return (
    <div className='md:w-60 pt-10 w-full bg-background overflow-x-hidden h-full flex-col border-r bg-background-primary border-border'>
      <div className='flex flex-col h-full w-full md:right-60'>
        <div className='flex flex-col flex-1 justify-between'>
          <div className='divide-y'>
            {leftSideElements.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                isActive={item.name ? path.includes(item.name) : false}
                onClick={() => handleItemClick(item)}
                isOpen={openItems.includes(item.name ?? '')}
              />
            ))}
          </div>
          <div>
            {leftSideBottomElements.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                isActive={false}
                onClick={() => handleItemClick(item)}
                isOpen={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
