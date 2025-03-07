import Home from '/Users/elijahmoye/Desktop/moveieFinder/movieFinder--/src/assets/round.png'
import Search from '/Users/elijahmoye/Desktop/moveieFinder/movieFinder--/src/assets/Search.png'
import likes from '/Users/elijahmoye/Desktop/moveieFinder/movieFinder--/src/assets/likes.png'
import logo from '/Users/elijahmoye/Desktop/moveieFinder/movieFinder--/src/assets/Logo/Your paragraph text.png'

export const Navbar = () => {


    return (

        <>
            <div className='flex flex-col min-h-screen w-[25vw] border-black border-2 bg-[#2B3537] items-center'>

                <img src={logo} alt="logo" />

                    <div className='flex flex-col gap-y-20'>

                        <img src={Home} alt="homeIcon" className='w-[32px] h-[32px]'/>
                        <img src={Search} alt="homeIcon" className='w-[32px] h-[32px]' />
                        <img src={likes} alt="homeIcon" className='w-[32px] h-[32px]' />

                    </div>

            </div>
        </>
    )
}