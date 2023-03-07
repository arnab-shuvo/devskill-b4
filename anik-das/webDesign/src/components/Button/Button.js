import React from 'react'
import {ChevronRightIcon} from '@heroicons/react/24/outline'

function Button({children, className}) {
  return (
    <button 
        className={`flex items-center px-5 py-3 rounded-lg ${className}`}>
            {children} 
            <ChevronRightIcon className='w-3 ml-2'/>
    </button>
  )
}

export default Button