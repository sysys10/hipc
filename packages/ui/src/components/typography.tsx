import cn from '@packages/ui/lib/utils'

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function H0({ children, className, ...props }: HeaderProps) {
  return (
    <h1 className={cn('scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl 2xl:text-7xl', className)} {...props}>
      {children}
    </h1>
  )
}

export function H1({ children, className, ...props }: HeaderProps) {
  return (
    <h1 className={cn('scroll-m-20 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl', className)} {...props}>
      {children}
    </h1>
  )
}

export function H2({ children, className, ...props }: HeaderProps) {
  return (
    <h2 className={cn('scroll-m-20 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-tight first:mt-0', className)} {...props}>
      {children}
    </h2>
  )
}

export function H3({ children, className, ...props }: HeaderProps) {
  return (
    <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h3>
  )
}

export function H4({ children, className, ...props }: HeaderProps) {
  return (
    <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h4>
  )
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function P({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
      {children}
    </p>
  )
}

interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  children: React.ReactNode
}

export function Blockquote({ children, className, ...props }: BlockquoteProps) {
  return (
    <blockquote className={cn('mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200', className)} {...props}>
      {children}
    </blockquote>
  )
}

interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function InlineCode({ children, className, ...props }: InlineCodeProps) {
  return (
    <code
      className={cn('relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400', className)}
      {...props}
    >
      {children}
    </code>
  )
}

interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function Lead({ children, className, ...props }: LeadProps) {
  return (
    <p className={cn('text-xl text-slate-700 dark:text-slate-400', className)} {...props}>
      {children}
    </p>
  )
}

interface LargeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Large({ children, className, ...props }: LargeProps) {
  return (
    <div className={cn('text-lg font-semibold text-slate-900 dark:text-slate-50', className)} {...props}>
      {children}
    </div>
  )
}

interface SmallProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function Small({ children, className, ...props }: SmallProps) {
  return (
    <small className={cn('text-sm font-medium leading-none', className)} {...props}>
      {children}
    </small>
  )
}

interface MutedProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function Muted({ children, className, ...props }: MutedProps) {
  return (
    <p className={cn('text-sm text-slate-500 dark:text-slate-400', className)} {...props}>
      {children}
    </p>
  )
}
