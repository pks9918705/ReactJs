import React, { Component } from 'react'
import Moviecard from './Moviecard'

export default class MovieList extends Component {
  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        
      </div>
    )
  }
}
