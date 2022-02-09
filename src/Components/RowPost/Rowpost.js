import React, { useEffect, useState} from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import {API_KEY, imageUrl } from '../../constants/constants'
import './Rowpost.css'
function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlid, setUrlid] = useState('')
    useEffect(() => {
       axios.get(props.url).then((response)=>{
        //    console.log(response.data.results[0])
           setMovies(response.data.results)
       })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
            console.log(id)
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
                if(response.data.results.length!==0){
                    setUrlid(response.data.results[0])
                }
                else{
                    console.log('Trailer not avialable')
                }
                console.log(response.data)
            })
      }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
                )}
            </div>
          { urlid && <YouTube opts={opts} videoId={urlid.key}/> }
        </div>
    )
}

export default Rowpost
