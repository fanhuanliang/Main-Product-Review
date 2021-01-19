import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getRequest() {
    axios.get('/api/products/1')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  componentDidMount() {
    this.getRequest();
  }

  render() {
    return (
      <div>
        <h1>Review Test</h1>
      </div>
    );
  }
}

export default App;