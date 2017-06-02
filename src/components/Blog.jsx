import React, { Component } from 'react';
import '../App.css';


class Blog extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Blog
        </h1>
        <h2>
          Title: {this.props.title}
        </h2>
        <h3>Author: {this.props.author}</h3>
        <p>{this.props.body}</p>
        <p>Comments: {this.props.comments}</p>
      </div>
    );
  }
}

export default Blog;
