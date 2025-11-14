import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {useNavigate, useParams} from 'react-router-dom'

const Player = () => {
    const {id} = useParams()
    const navigate = useNavigate();
const [apData , setapData] = useState({
    name: "",
    key: "",
    published_at :"",
    type: ""
})
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWNkNDg2NWEzNTkzODY4NTUzNzM5OGFkMjE5YjlmZCIsIm5iZiI6MTc2MzAzNzgxMy43NTUsInN1YiI6IjY5MTVkMjc1YzVjNWZhZmYzYWEwZGQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.56V3aYxfvKShzA1SbOsfukFCdrwH6GIdUNl_pVy_zuA'
  }
};


useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res =>setapData(res.results[0]))
  .catch(err => console.error(err));
},[])
  return (
    <div className='player'>
      <img  src={back_arrow_icon} alt=""  onClick={()=> navigate(-2)}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apData.key}`}

      frameborder="0" title='treailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apData.published_at}</p>
        <p>{apData.name}</p>
        <p>{apData.type}</p>
      </div>
    </div>
  )
}

export default Player
