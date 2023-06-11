import React, { Component } from 'react'
import Moviecard from './Moviecard'


export default class MovieList extends Component {
  //construtor of suoer class is called
 
  render() {

    // we are destructing movies array from state
    const {movies,addToCartHandler,addToFavHandler,starHandler}=this.props
    // console.log('data aya hai **********',this.props);
    
    return (
      <div>
        <h1>Movie List</h1>
         {movies.map((movie)=> 
         ( <Moviecard movie={movie} starHandler={starHandler} addToCartHandler={addToCartHandler} addToFavHandler={addToFavHandler}  />)
         )}
        
      </div>
    )
  }
}

//TODO: complete all the other handlers
