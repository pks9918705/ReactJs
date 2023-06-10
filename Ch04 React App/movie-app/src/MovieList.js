import React, { Component } from 'react'
import Moviecard from './Moviecard'

export default class MovieList extends Component {
  //construtor of suoer class is called
  constructor(){
    super()
    this.state = {
      movies: [ {
        title: "The Thor",
        plot: "Supernatural powers shown in movie",
        price: "Rs. 199",
        rating: 8.9,
        stars: 0,
        favourite: false,
        addToCart: false
      },
    {
        title: "The AntMan",
        plot: "Supernatural powers shown in movie",
        price: "Rs. 199",
        rating: 8.9,
        stars: 0,
        favourite: false,
        addToCart: false
      }]
    }
    
  }
  starHandler=(movie,str)=>{

    console.log('Yeha pauch gaya hai');
    
    //array movies ko hmme extract kiya state se
    const {movies}=this.state
    //  or 
    // const movies = [...this.state.movies];
    const mid = movies.indexOf(movie);

    if(str === "plus"){
      if(movies[mid].stars>=5) return

      movies[mid].stars+=0.5
    }else{
      if(movies[mid].stars<=0) return
      movies[mid].stars-=0.5
    }
    // index pe jo movie rakha hua hai usko change kr diya gaya hai ab tmko ush movie ko state m change krna hai 
    this.setState({movies:movies})
    // since array is changed so state is changed, so rerendering takes place
 
  }
  render() {

    // we are destructing movies array from state
    const {movies}=this.state
    return (
      <div>
        <h1>Movie List</h1>
         {movies.map((movie)=> 
         ( <Moviecard movie={movie} starHandler={this.starHandler}  />)
         )}
        
      </div>
    )
  }
}

//TODO: complete all the other handlers
