import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
// import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      year: 0,
      director: '',
      plot: '',
      genre: ''

    }
  }

   
  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    axios.get(`http://omdbapi.com/?t=${title}&apikey=d31f1a94`)
      .then((res) => {
        console.log(res);
        this.setState({
          title: res.data.Title,
          year: res.data.Year,
          director: res.data.Director,
          plot: res.data.Plot,
          genre: res.data.Genre
        })
      })
  }

  _searchById = () => {
    console.log("Search by ID");
    axios.get(`http://omdbapi.com/?t=${this.state.title}&apikey=d31f1a94`)
      .then((res) => {
        this.setState({id: res.data.imdbID})
      })
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search 
        searchByTitle={this._searchByTitle} 
        searchById={this._searchById} 
        movie={this.state.movie}/>
        <Movie 
        title={this.state.title}
        year={this.state.year}
        director={this.state.director}
        plot={this.state.plot}
        genre={this.state.genre}
        />
      </div>
    );
  }
}

export default App;
