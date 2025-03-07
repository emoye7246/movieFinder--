import { Navbar } from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'




export const App = () =>  {



  return (
      <>
        <div className='flex flex-row max-w-screen h-screen'>
            
            <Navbar />


            <div>
                <Outlet />
            </div>

        </div>


      </>
  )
}

