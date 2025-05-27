import React from 'react'
import FAQList from "./components/FAQList.jsx"

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-bl from-purple-100 via-gray-200 to-purple-400 font-[Prompt] transition-all '>
      <header className=' relative flex flex-col items-center  text-center p-6'>
        <div className='absolute inset-0 p-4 rounded-full blur-3xl bg-gradient-to-r from-purple-900 to-pink-900 opacity-50'> </div>
          <div className=' my-4 bg-gradient-to-r from-blue-900 to-gray-900 text-transparent bg-clip-text animate-fade-up '>
            <h1 className='text-5xl font-semibold '>
              FAQ FAQ
            </h1>
          </div>
          <p className='text-black '>
            Aqui voce encontra sua FAQ
          </p>         
      </header>
      
        <FAQList/>
      
    </div>
  )
}

export default App