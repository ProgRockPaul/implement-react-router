import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from "./components/Home";
import Blog from "./components/Blog";
import Movies from "./components/Movies";
import Food from "./components/Food";
import About from "./components/About";

var post = {
  title: "Best Friends Are Worth It",
  author: "Paul Walsh",
  body: "Many of our cats and dogs can be flown to their new homes in the U.S. or Canada for free. Most of the pets that qualify for these free flights can be adopted without the adopter needing to visit our Sanctuary in Kanab, Utah. However, because some of our animals have special needs (either behavioral or medical), we ask that interested adopters come to the Sanctuary to meet those pets. Email adoptions@bestfriends.org for more information.",
  comments: "Nice One!"
}

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>{' '}
              <Link to="/about">About</Link>{' '}
              <Link to="/blog">Blog</Link>{' '}
              <Link to="/movies">Favourite Movies</Link>{' '}
              <Link to="/food">Favourite Food</Link>
            </nav>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/blog" component={
                () => (<Blog title={post.title}
                        author={post.author}
                        body={post.body}
                        comments={post.comments} />
              )}/>
              <Route path="/movies" component={Movies}></Route>
              <Route path="/food" component={Food}></Route>
          </div>
        </Router>
    );
  }
}

export default App;
