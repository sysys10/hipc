import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import cn from '@packages/ui/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium relative overflow-hidden select-none transition-all duration-200 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wider',
  {
    variants: {
      variant: {
        // Contained (Default MUI style)
        default: `
        bg-gradient-to-r from-[#003B4A] to-[#001E2B] 
        text-sky-100/90
        opacity-90
        shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_0_rgba(0,0,0,0.14),0_1px_5px_0_rgba(0,0,0,0.12)]
        hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.3),0_4px_5px_0_rgba(0,0,0,0.24),0_1px_10px_0_rgba(0,0,0,0.22)]
        hover:opacity-100
        active:shadow-inner
        active:opacity-95
        after:content-[''] 
        after:absolute 
        after:inset-0 
        after:bg-sky-200/10
        after:opacity-0
        hover:after:opacity-100 
        after:transition-all
        after:duration-300
        border
        border-sky-500/20
      `,
        // Outlined
        outline: `
          border border-gray-500/50 text-text-1
          bg-background
          hover:bg-background-secondary
          active:bg-background-secondary
          after:content-[''] after:absolute after:inset-0 after:bg-current after:opacity-0
          hover:after:opacity-[0.04] after:transition-opacity`,

        // Text
        text: `
          text-blue-500 
          hover:bg-blue-50 
          active:bg-blue-100
          after:content-[''] after:absolute after:inset-0 after:bg-current after:opacity-0 
          hover:after:opacity-[0.04] after:transition-opacity`,

        // Contained Error
        destructive: `
          bg-red-500 text-white 
          shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_0_rgba(0,0,0,0.14),0_1px_5px_0_rgba(0,0,0,0.12)]
          hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2),0_4px_5px_0_rgba(0,0,0,0.14),0_1px_10px_0_rgba(0,0,0,0.12)]
          hover:bg-red-600 
          active:shadow-[0_5px_5px_-3px_rgba(0,0,0,0.2),0_8px_10px_1px_rgba(0,0,0,0.14),0_3px_14px_2px_rgba(0,0,0,0.12)]
          after:content-[''] after:absolute after:inset-0 after:bg-white/30 after:opacity-0 
          hover:after:opacity-100 after:transition-opacity`,
        ghost: `
          bg-transparent text-white 
          hover:bg-white/30
          active:bg-white/50
          after:content-[''] after:absolute after:inset-0 after:bg-transparent after:opacity-0 
          hover:after:opacity-100 after:transition-opacity`,
        // Secondary
        secondary: `
          bg-gray-500 text-white 
          shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_0_rgba(0,0,0,0.14),0_1px_5px_0_rgba(0,0,0,0.12)]
          hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2),0_4px_5px_0_rgba(0,0,0,0.14),0_1px_10px_0_rgba(0,0,0,0.12)]
          hover:bg-gray-600 
          active:shadow-[0_5px_5px_-3px_rgba(0,0,0,0.2),0_8px_10px_1px_rgba(0,0,0,0.14),0_3px_14px_2px_rgba(0,0,0,0.12)]
          after:content-[''] after:absolute after:inset-0 after:bg-white/30 after:opacity-0 
          hover:after:opacity-100 after:transition-opacity`
      },
      size: {
        default: 'h-9 min-w-[64px] px-4 py-1.5',
        small: 'h-8 min-w-[64px] px-3 py-1 text-xs',
        large: 'h-10 min-w-[64px] px-6 py-2 text-base',
        extraLarge: 'h-12 min-w-[80px] px-8 py-3 text-xl',
        half: 'w-1/2 py-2 px-4 text-lg',
        full: 'w-full py-2 px-4 text-xl',
        icon: 'h-10 w-10 rounded-full p-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})

Button.displayName = 'Button'

export { Button, buttonVariants }
