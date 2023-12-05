import React, { useState,useEffect } from 'react'
import "./banner.css"
import axios from '../../axios'
import { apiKey,imageUrl } from '../../constants/constants'



const Banner = () => {
const [movie,setMovie]=useState()
//to make name and description we use state. setMovie to update the state of movie
useEffect(() => {
axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
  const results=response.data.results
  const val= Math.floor(Math.random()*results.length)

  // console.log(response.data.results[0]);
  setMovie(results[val])
})
}, [])
//component needs to load only for first time loading so []. useEffect will wrok after banner component loads



  return (
    <div>
    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:''})`}}>
      <div className='content'>
        <h1 className='title'>{movie?movie.title:''}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie?movie.overview:''}</h1>
      </div>
      <div className="fade_bottom">

      </div>
    </div>
    </div>
  )
}

export default Banner



// we need movie details when banner component loads or mounts. we use useEffect