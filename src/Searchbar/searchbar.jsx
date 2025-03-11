import { useEffect, useState } from 'react'
import logo from '/Users/elijahmoye/Desktop/moveieFinder/movieFinder--/src/assets/Logo/Your paragraph text.png'



export const SearchPage = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const [searchInput, setSearchInput] = useState('')
    const [dataResult, setDataResult] = useState([])
    const Apikey = `ae90ab0914d7ed76e26b26f951f6d373`
    

    useEffect(() => {

        const fetchData = async () => {

            try{

                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&page=1&api_key=${Apikey}`)
                await response.json().then((response) => {

                    setDataResult(response.results || [])
                })
                setLoading(false)
                setError(null)



            }catch(err){
                setLoading(false)
                setError(err)

            }
        }
        fetchData()
    }, [search])




    return (

        <>
            <div className='flex flex-col h-screen w-[75vw] bg-[#2B3537] items-center  overflow-clip ' >

            {loading && <div>We will be right with you in one moment</div>}
            {error && <div>Please check your internet connection and we will see what we can do on our end To solve this issue</div>}

                <div className='flex flex-col items-center mb-10'>
                    <img src={logo} alt="logo" className='h-[200px] w-[200px]'/>
                    <div className='flex flex-row gap-x-4'>
                    <input type="text" className='w-3xl h-10 rounded-2xl text-black bg-gray-200 border-2 border-black text-center' placeholder='Search any Movie' onChange={(e) => setSearchInput(e.target.value)}/>
                    <button className='text-[#F3DFCC]' onClick={() => setSearch(searchInput)}>Search</button>
                    </div>
                </div>

                <div className='grid grid-cols-3 grid-rows-1 overflow-y-scroll gap-x-10'>
                    {dataResult.map((movie, i) => 

                        <div key={i} className='flex flex-col justify-center items-center mb-5' >
                           <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie-poster" className='flex flex-row border-2 border-black h-[300px] w-[300px]' id='fade' />

                           <div className='text-[#F3DFCC]'>{movie.title}</div>
                        </div>
                    )}
                </div>
            </div>


        </>
    )
}