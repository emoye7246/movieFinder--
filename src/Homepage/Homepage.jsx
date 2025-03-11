import { MostPopular, NowPlaying, TopRated, Upcoming } from "./mostPopular"
import { createContext, useState } from "react"


export const MovieContext = createContext(null)


export const Homepage = () => {

        const [showMovie, setShowMovie] = useState({title: '', info: '', backdrop: ''})

    return (

        <>
            <div className="flex flex-col w-[75vw] h-full bg-[#2B3537]">

                    <div className="flex flex-col border-2 border-black w-full h-[70vh] object-cover justify-end" style={{backgroundImage: `url(${showMovie.backdrop})`, backgroundSize: `cover`, backgroundPosition: 'center' }}>
                            
                            <div className="flex flex-col text-white gap-y-10" style={{fontFamily: 'playfairText'}}>
                                <div className="text-3xl">{showMovie.title}</div>
                                <div className="text-2xl" style={{fontFamily: 'Robotos'}}>{showMovie.info}</div>
                            </div>

                    </div>
                    
                <MovieContext.Provider value={{showMovie, setShowMovie}}>
                    <div className="flex flex-col h-full border-2 border-black gap-y-10 overflow-y-scroll" >

                        <div>
                            <NowPlaying />
                        </div>

                        <div>
                            <MostPopular />
                        </div>

                        <div>
                            <TopRated />
                        </div>

                        <div>
                            <Upcoming />
                        </div>
                    </div>
                </MovieContext.Provider>
            </div>    
        </>
    )
}