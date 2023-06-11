
//! App is as  a functional component


import MovieList from './MovieList';
import Navbar from './Navbar';
//creating a variable for item count in cart

import React, { Component } from 'react'

export default class App extends Component {
  
  render() {
    return (
      <>
      <Navbar/>
      <h1>Movie App</h1>
      <MovieList/>
      </>
    )
  }
}


 