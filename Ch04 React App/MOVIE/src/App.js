
//! App is as  a functional component


import MovieList from './MovieList';
import Navbar from './Navbar';
// import MovieCard from './Moviecard'

function App() {
  return (
    <>
    <Navbar/>
    <h1>Movie App</h1>
    <MovieList/>
    </>
  );
}

export default App;
