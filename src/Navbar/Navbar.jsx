import Home from '/Users/elijahmoye/Desktop/moveieFinder/movieFinder--/src/assets/round.png'
import Search from '/Users/elijahmoye/Desktop/moveieFinder/movieFinder--/src/assets/Search.png'
import likes from '/Users/elijahmoye/Desktop/moveieFinder/movieFinder--/src/assets/likes.png'
import logo from '/Users/elijahmoye/Desktop/moveieFinder/movieFinder--/src/assets/Logo/Your paragraph text.png'


export const Navbar = () => {

    return (

        <>
            <div className="flex flex-col w-1/6 min-h-screen border-2 border-black bg-[#2B3537]">

                <img src={logo} alt="logo" className='h-[250px] w-[250px]' />
                

                <div className='flex flex-col items-center h-full justify-evenly'>


                    <img src={Home} alt="homeIcon"  />
                    <img src={Search} alt="Search" />
                    <img src={likes }alt="likes" />

                </div>

            </div>
        </>
    )
}