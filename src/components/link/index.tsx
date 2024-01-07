import React from 'react'

interface LinkProps {
    
}

const LinkApp: React.FC<LinkProps> = ({}) => {
    return(
        <p className="text-gray-500 dark:text-gray-400">500,000 people & companies have made over a million apps with Glide. <a href="#" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Read their stories
        <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a></p>
        
        )
}

export default LinkApp

