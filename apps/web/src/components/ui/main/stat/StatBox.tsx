interface StatBoxProps {
  title: string
  value: string | number
  unit?: string
  variant: 'blue' | 'green' | 'yellow' | 'red' | 'orange'
  icon?: React.ReactNode
}

const getColorClasses = (variant: StatBoxProps['variant']) => {
  const colors = {
    blue: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-300'
    },
    green: {
      bg: 'bg-green-500/10',
      text: 'text-green-300'
    },
    yellow: {
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-300'
    },
    red: {
      bg: 'bg-red-500/10',
      text: 'text-red-300'
    },
    orange: {
      bg: 'bg-orange-500/10',
      text: 'text-orange-300'
    }
  }
  return colors[variant]
}

const StatBox = ({ title, value, unit, variant, icon }: StatBoxProps) => {
  const colors = getColorClasses(variant)

  return (
    <div className='max-h-48 bg-white/50 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all shadow-lg hover:shadow-xl md:aspect-16/10'>
      <div className='text-sm text-sky-300/70 uppercase tracking-wider mb-2'>{title}</div>
      {icon ? (
        <div className='flex items-center gap-3'>
          <div className={`h-10 w-10 rounded-full ${colors.bg} flex items-center justify-center`}>
            <span className={colors.text}>{icon}</span>
          </div>
          <span className={`text-xl xl:text-3xl font-bold ${colors.text}`}>{typeof value === 'number' ? value.toLocaleString() : value}</span>
        </div>
      ) : (
        <div className='flex items-baseline gap-2'>
          <span className={`text-xl xl:text-3xl font-bold ${colors.text}`}>{typeof value === 'number' ? value.toLocaleString() : value}</span>
          {unit && <span className='text-white/60 xl:text-3xl'>{unit}</span>}
        </div>
      )}
    </div>
  )
}

export { StatBox }
