
//! App is as  a functional component

//TODO: leave App class and convert all other components in functions


import MovieList from './MovieList';
import Navbar from './Navbar';
//creating a variable for item count in cart

import React, { Component } from 'react'
import { movies } from './moviesData'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movies,
      itemToKart: 0
    }

  }
  starHandler = (movie, str) => {

    console.log('Yeha pauch gaya hai');

    //array movies ko hmme extract kiya state se
    const { movies } = this.state
    //  or 
    // const movies = [...this.state.movies];
    const mid = movies.indexOf(movie);

    if (str === "plus") {
      if (movies[mid].stars >= 5) return

      movies[mid].stars += 0.5
    } else {
      if (movies[mid].stars <= 0) return
      movies[mid].stars -= 0.5
    }
    // index pe jo movie rakha hua hai usko change kr diya gaya hai ab tmko ush movie ko state m change krna hai 
    this.setState({ movies: movies })
    // since array is changed so state is changed, so rerendering takes place

  }
  addToCartHandler = (movie) => {

    let {itemToKart} = this.state

    const { movies } = this.state
    const mid = movies.indexOf(movie);

    console.log("inital", movies[mid].addToCart)

     console.log('item in cart',this.state.itemToKart);
     
  
    if (movies[mid].addToCart) {
       itemToKart -= 1;

    } else {
       itemToKart+= 1;


    }

    movies[mid].addToCart = !movies[mid].addToCart

    console.log("final", movies[mid].addToCart)

    this.setState({
      movies:movies ,
      itemToKart:itemToKart 
    })
  }
  addToFavHandler = (movie) => {

    const { movies } = this.state
    const mid = movies.indexOf(movie);

    console.log("inital", movies[mid].favourite)

    movies[mid].favourite = !movies[mid].favourite

    console.log("final", movies[mid].favourite)

    this.setState({ movies: movies })
  }
  render() {
    return (
      <>
        <Navbar  item={this.state.itemToKart}  />
        <h1>Movie App</h1>
        <MovieList movies={movies} addToCartHandler={this.addToCartHandler} addToFavHandler={this.addToFavHandler} starHandler={this.starHandler}  />
      </>
    )
  }
}


