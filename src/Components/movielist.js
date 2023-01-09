import { Rating } from '@mui/material'
import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Movielist = ({movies}) => {
    return (
        <div style={{display:'grid',gridTemplateColumns:'auto auto auto',marginLeft:'150px',gap:'20px'}}>
{movies.map(movie => (<Card style={{ width: '18rem' }}>
      <Card.Img style={{width:'18rem',height:'370px'}} variant="top" src= {movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
      </Card.Body>
      <Rating name="read-only" value={movie.rating} readOnly  max ={10}/>
      <Link to={`/details/${movie.id}`}>MORE DETAILS...</Link>
    </Card>
     ))}
        </div>
    )
}
export default Movielist