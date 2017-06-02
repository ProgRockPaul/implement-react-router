import React, { Component } from 'react';
import '../App.css';


class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {

      // state to track the search query
      searchQuery: '',
      movieTitle: '',
      movieDirector: '',
      movieSummary: '',


      // states to track the movie information below....
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event){
    this.setState({searchQuery: event.target.value});
    console.log('Your Search Query is ' + this.state.searchQuery);
  }

  handleSubmit(event){
    let base = this;

    let withSpaces = this.state.searchQuery.replace(/%20/g, " ");

    this.setState({searchQuery: withSpaces});

    console.log('You are adding the following movie: ' + this.state.searchQuery);

    // your fetch and movie parameter state setting below here
    fetch('http://netflixroulette.net/api/api.php?title=' + this.state.searchQuery)
      .then(function(response) {
        console.log(response);
        return response.json()
      }).then(function(json) {
        console.log('Parsed JSON', json)
        base.setState({
          movieTitle: json.show_title,
          movieDirector: json.director,
          movieSummary: json.summary,
         })
      }).catch(function(ex) {
        console.log('Parsing JSON failed', ex)
        alert('Error! ' + ex);
      });
    event.preventDefault();
  }



  render() {
    return (
      <div>
          <h1>Search for info on your favourite Movie!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Get this movie!"/>
          <p>{this.state.movieTitle}</p>
          <p>Directed By: {this.state.movieDirector}</p>
          <p>{this.state.movieSummary}</p>
        </form>
    </div>
    );
  }
}

export default Movies;
