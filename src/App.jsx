import { useEffect, useState } from 'react'
import { Navbar } from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const App = () =>  {


  return (
    <>
       <div className='flex flex-row max-w-full min-h-full'>
            
              <Navbar />

              <Outlet />

       </div>
    </>
  )
}

