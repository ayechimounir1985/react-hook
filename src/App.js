import data from './Components/data'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Moviefilms from './Components/moviefilms';
import Details from './Components/details';

function App() {
  const [movies,setMovies] = useState(data)
  
  
  return (
    <Router>
      <Routes>
        <Route index element ={<Moviefilms movies ={movies} setMovies={setMovies}/>}></Route>
        <Route path ='/details/:idmovie' element={<Details movies ={movies}  />}></Route>


      </Routes>
    </Router>
     
    
  );
}

export default App;
