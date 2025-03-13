import { Link } from 'react-router-dom'
import { Icons } from '../icon'

export const Navbar = () => {


    return (

        <>
            <div className='flex flex-col min-h-screen w-[25vw] border-black border-2 bg-[#2B3537] items-center'>

                <img src={Icons.logo} alt="logo" />

                    <div className='flex flex-col gap-y-20'>
                        
                        <Link to='/'>
                            <img src={Icons.home} alt="homeIcon" className='w-[32px] h-[32px]'/>
                        </Link>
                        
                        <Link to='search'>
                            <img src={Icons.search} alt="searchIcon" className='w-[32px] h-[32px]' />
                        </Link>

                    </div>

            </div>
        </>
    )
}