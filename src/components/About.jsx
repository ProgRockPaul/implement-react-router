import React, { Component } from 'react';
import '../App.css';


class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      zipcode: '<zipcode here>',
      highTemp: 0,
      lowTemp: 0,
      city: '<city here>',
      description: '<description here>'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({zipcode: event.target.value});
    console.log('Your zip code is ' + this.state.zipcode);
  }

  handleSubmit(event) {
    let base = this;

    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + this.state.zipcode + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
    .then((response) => {
      return response.json()
    }).then((json) => {
      console.log('Parsed JSON', json)
      base.setState({
        city: json.name,
        description: json.weather.description,
        highTemp: json.main.temp_max,
        lowTemp: json.main.temp_min
      });
    }).catch((ex) => {
      console.log('Parsing JSON Failed', ex)
      alert('Err! ' + ex);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            {this.state.city}: currently {this.state.description} with a high of {this.state.highTemp} degrees and a low of {this.state.lowTemp} degrees.
          </p>
          <label>
            Please enter your zip code for the weather:
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Get My Forecast!" />
        </form>
      </div>
    );
  }
}

export default About;
