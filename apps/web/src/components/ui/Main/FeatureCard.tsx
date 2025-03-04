'use client'

import { motion } from 'framer-motion'

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string; idx?: number }) => {
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className='bg-white p-6 h-40 rounded-lg shadow-md border flex border-gray-200 hover:shadow-lg transition-shadow duration-300 items-start text-center'
    >
      <div className={`p-3 bg-blue-300 bg-opacity-10 rounded-full`}>
        <Icon className='text-infosys-purple w-6 h-6' />
      </div>
      <div className='flex flex-col space-y-2 pt-2 pl-3 text-start flex-1'>
        <h3 className='text-xl font-medium md:mb-0 mb-5 text-infosys-purple'>{title}</h3>
        <p className='text-gray-600 text-sm'>{description}</p>
      </div>
    </motion.div>
  )
}

export default FeatureCard
