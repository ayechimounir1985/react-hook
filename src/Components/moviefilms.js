import React, { useState } from 'react'
import Movielist from './movielist'
import Add from './add'
import Filtre from './filtre'

const Moviefilms = ({setMovies,movies}) => {

    const Adding = (newmovie) =>{
        setMovies ([...movies,newmovie])
      }
      const [search,setSearch]=useState('')
      const [rate,setRate] = useState(0)
  return (
    <div>
       <div style={{display:'flex',justifyContent:'space-around'}}>
      <Filtre setSearch={setSearch} setRate={setRate} rate/>
      <Add Adding ={Adding} />
      </div>
     <Movielist movies={movies.filter(movie=> movie.title.toLocaleLowerCase().trim().includes(search) && movie.rating>= rate)}/>
     
    </div>
  )
}

export default Moviefilms