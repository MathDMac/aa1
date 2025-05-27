import React from 'react'
import FAQItem from "./FAQItem.jsx"

const FAQList = () => {
  return (
    <div className=' flex  flex-col h-[76vh] max-w-[90%] overflow-hidden  px-20 pt-6 pb-4 mx-auto  '>
      <div className='flex justify-between'>
        <div className='flex items-start p-2 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent mb-10 animate-fade-down animate-once'>
          <h1 className='text-center font-semibold text-3xl '>List</h1>
        </div>
    
      </div>
        <FAQItem/>
    </div>
  )
}

export default FAQList