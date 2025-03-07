import { useState, useEffect } from "react"


export const MostPopular = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [mostPopular, setMostPopular] = useState([])
    const Apikey = `ae90ab0914d7ed76e26b26f951f6d373`
  
    useEffect(() => {
  
      const fetchData = async () => {
      
          try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${Apikey}`)
            await response.json().then((response) => {

                setMostPopular(response.results)
                console.log(response.results)
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


    return (

        <>
            
            <div>

                {loading && <div>We will be right with you in one moment</div>}
                {error && <div>Please check your internet connection and we will see what we can do on our end To solve this issue</div>}


                <h2>Most Popular</h2>



            </div>

        
        </>
    )

}

export const TopRated = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [movieInfo, setMovieInfo] = useState([])
    const Apikey = `ae90ab0914d7ed76e26b26f951f6d373`
  
    useEffect(() => {
  
      const fetchData = async () => {
      
          try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${Apikey}`)
            await response.json().then((response) => console.log(response))
            setLoading(false)
            setError(null)
            
          }catch(err){
  
            setError(error)
            setLoading(false)
  
          }
  
      }
      fetchData()
  
    }, [])

}