import { TimelineItemProps } from '@/lib/interfaces/components'
import React from 'react'

const TimelineItem: React.FC<TimelineItemProps> = ({title, date, description,icon}) => {
    return (
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          {icon}
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {date}
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
         {description}
        </p>
      </li>
    )
}


export default TimelineItem