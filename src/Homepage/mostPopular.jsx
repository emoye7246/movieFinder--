import { useState, useEffect, useContext } from "react"
import Playfair from '/Users/elijahmoye/Desktop/moveieFinder/movieFinder--/src/assets/Fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf'
import { MovieContext } from "./Homepage"

export const NowPlaying = () => {

    const {showMovie, setShowMovie} = useContext(MovieContext)

      
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [nowPlaying, setNowPlaying] = useState([])
    const Apikey = `ae90ab0914d7ed76e26b26f951f6d373`
  
    useEffect(() => {
  
      const fetchData = async () => {
      
          try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${Apikey}`)
            await response.json().then((response) => {

                setNowPlaying(response.results.slice(0, 10))
                displayMovie(response.results[0].original_title, response.results[0].overview, response.results[0].backdrop_path)
            })

            setLoading(false)
            setError(null)
            
          }catch(err){
  
            setError(err)
            setLoading(false)
  
          }
  
      }
      fetchData()
  
    }, [])

    const displayMovie = (title, info, backdrop) => {

      setShowMovie({title: title, info: info, backdrop: `https://image.tmdb.org/t/p/original/${backdrop}`})
      console.log(showMovie)
    }

    return (

        <>
            
            <div className="flex flex-col p-14 gap-y-10">

                {loading && <div>We will be right with you in one moment</div>}
                {error && <div>Please check your internet connection and we will see what we can do on our end To solve this issue</div>}

 
                <div className="flex flex-row gap-x-2 text-[32px] font-[Playfair]">
                  <div className="text-white">Now</div>
                  <div className="text-[#F3DFCC]">Playing</div>
                </div>

                <div className="flex flex-row max-w-full min-h-full items-center justify-between gap-x-10 overflow-clip overflow-x-scroll">

                    {nowPlaying.map((movie, i) => 
                    
                        <div className="flex flex-col items-center gap-y-4" key={i} onClick={() => displayMovie(movie.title, movie.overview, movie.backdrop_path)} id="fade">
                            
                            <div className="border-2 border-black h-[300px] w-[300px] rounded-2xl">
                              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movieImage" className="w-[300px] h-[300px] rounded-2xl object-fill object-center"   />
                            </div>

                            <div className="text-[#F3DFCC]">{movie.title}</div>
                            

                        </div>
                    
                    )}


                </div>

            </div>
        
        </>
    )

}

export const MostPopular = () => {

  const {showMovie, setShowMovie} = useContext(MovieContext)


    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [mostPopular, setMostPopular] = useState([])
    const Apikey = `ae90ab0914d7ed76e26b26f951f6d373`
  
    useEffect(() => {
  
      const fetchData = async () => {
      
          try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${Apikey}`)
            await response.json().then((response) => {

                setMostPopular(response.results.slice(0, 10))
            })

            setLoading(false)
            setError(null)
            
          }catch(err){
  
            setError(err)
            setLoading(false)
  
          }
  
      }
      fetchData()
  
    }, [])


    const displayMovie = (title, info, backdrop) => {

      setShowMovie({title: title, info: info, backdrop: `https://image.tmdb.org/t/p/original/${backdrop}`})
      console.log(showMovie)
    }

    return (

        <>
            
            <div className="flex flex-col p-14 gap-y-10">

                {loading && <div>We will be right with you in one moment</div>}
                {error && <div>Please check your internet connection and we will see what we can do on our end To solve this issue</div>}


                <div className="flex flex-row gap-x-2 text-[32px] font-[Playfair]">
                  <div className="text-[#F3DFCC]">Most</div>
                  <div className="text-white">Popular</div>
                </div>
                <div className="flex flex-row max-w-full min-h-full items-center justify-between gap-x-10 overflow-clip overflow-x-scroll">

                    {mostPopular.map((movie, i) => 
                    
                        <div className="flex flex-col items-center gap-y-4" onClick={() => displayMovie(movie.title, movie.overview, movie.backdrop_path)} key={i}>
                            
                            <div className="border-2 border-black h-[300px] w-[300px] rounded-2xl">
                              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movieImage" className="w-[300px] h-[300px] rounded-2xl object-fill object-center"   />
                            </div>

                            <div className="text-[#F3DFCC]">{movie.title}</div>

                            

                        </div>
                    
                    )}


                </div>

            </div>
        
        </>
    )

}

export const TopRated = () => {

  const {showMovie, setShowMovie} = useContext(MovieContext)


    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [movieInfo, setMovieInfo] = useState([])
    const Apikey = `ae90ab0914d7ed76e26b26f951f6d373`
  
    useEffect(() => {
  
      const fetchData = async () => {
      
          try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${Apikey}`)
            await response.json().then((response) => {

              setMovieInfo(response.results.slice(0, 10))
            })
            setLoading(false)
            setError(null)
            
          }catch(err){
  
            setError(error)
            setLoading(false)
  
          }
  
      }
      fetchData()
  
    }, [])


    const displayMovie = (title, info, backdrop) => {

      setShowMovie({title: title, info: info, backdrop: `https://image.tmdb.org/t/p/original/${backdrop}`})
      console.log(showMovie)
    }

    console.log(movieInfo)


    return (

          <>
            <div className="flex flex-col p-14 gap-y-10">

              {loading && <div>We will be right with you in one moment</div>}
              {error && <div>Please check your internet connection and we will see what we can do on our end To solve this issue</div>}
              
                <div className="flex flex-row gap-x-2 text-[32px] font-[Playfair]">
                  <div className=" text-white">Top</div>
                  <div className="text-[#F3DFCC]">Rated</div>
                </div>

               <div className="flex flex-row max-w-full min-h-full items-center justify-between overflow-clip overflow-x-scroll gap-x-10 ">

                  {movieInfo.map((movie, i) => 

                          <div className="flex flex-col items-center gap-y-4" onClick={() => displayMovie(movie.title, movie.overview, movie.backdrop_path)} key={i}>
                                                      
                            <div className="border-2 border-black h-[300px] w-[300px] rounded-2xl">
                              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movieImage" className="w-[300px] h-[300px] rounded-2xl object-fill object-center"   />
                            </div>

                            <div className="text-[#F3DFCC]">{movie.title}</div>
                          </div>
                  )}


               </div>
            </div>
          </>
    )
}

export const Upcoming = () => {

  const {showMovie, setShowMovie} = useContext(MovieContext)


      
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [upcoming, setUpcoming] = useState([])
    const Apikey = `ae90ab0914d7ed76e26b26f951f6d373`
  
    useEffect(() => {
  
      const fetchData = async () => {
      
          try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${Apikey}`)
            await response.json().then((response) => {

                setUpcoming(response.results.slice(0, 10))
            })

            setLoading(false)
            setError(null)
            
          }catch(err){
  
            setError(err)
            setLoading(false)
  
          }
  
      }
      fetchData()
  
    }, [])


    const displayMovie = (title, info, backdrop) => {

      setShowMovie({title: title, info: info, backdrop: `https://image.tmdb.org/t/p/original/${backdrop}`})
      console.log(showMovie)
    }

    return (

        <>
            
            <div className="flex flex-col p-14 gap-y-10">

                {loading && <div>We will be right with you in one moment</div>}
                {error && <div>Please check your internet connection and we will see what we can do on our end To solve this issue</div>}


                <div className="flex flex-row gap-x-2 text-[32px] font-[Playfair]">
                  <div className="text-[#F3DFCC]">Upcoming</div>
                  <div className="text-white">Movies</div>
                </div>
                <div className="flex flex-row max-w-full min-h-full items-center justify-between gap-x-10 overflow-clip overflow-x-scroll">

                    {upcoming.map((movie, i) => 
                    
                          <div className="flex flex-col items-center gap-y-4" onClick={() => displayMovie(movie.title, movie.overview, movie.backdrop_path)} key={i}>
                              
                          <div className="flex flex-col items-center gap-y-4" key={i}>
                                                        
                              <div className="border-2 border-black h-[300px] w-[300px] rounded-2xl">
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movieImage" className="w-[300px] h-[300px] rounded-2xl object-fill object-center"   />
                              </div>

                              <div className="text-[#F3DFCC]">{movie.title}</div>
                            </div>
                              

                          </div>
                    
                    )}


                </div>

            </div>
        
        </>
    )


}

