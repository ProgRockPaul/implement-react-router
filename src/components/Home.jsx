import React, {Component} from 'react';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shakeSpeare: ''
    }
  }

  componentDidMount() {
    // save a reference to `this` because the value of `this` will change
    // inside the different callback functions.
    var base = this;

    // fetch a poem
    let poemApi = 'http://ShakeItSpeare.com/api/poem';
    fetch(poemApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
          base.setState({ shakeSpeare: json.poem });
      }).catch((ex) => {
        console.log('An error occured while parsing!', ex)
      });
  }

  render() {
    let poetry = this.state.shakeSpeare;
    return (
      <div>
        <h1>My favorite Shakespeare poem:</h1>
        {poetry}
      </div>
     );
  }
}
export default Home;
