import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './ReviewsView.jsx';
import Overall from './Overall.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsCount: 0,
      overall: {},
      reviews: []
    };
  }

  getRequest() {
    axios.get('/api/products/3')
      .then((response) => {
        // handle success
        // console.log(response.data)
        this.setState({
          reviewsCount: response.data.length,
          reviews: response.data
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        // this.getOverallRequest();
      });
  }

  getOverallRequest() {
    axios.get('/api/products/overall/3')
      .then((response) => {
        // handle success
        this.setState({
          overall: response.data[0]
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  componentDidMount() {
    this.getRequest();
    this.getOverallRequest();
  }

  render() {
    // console.log(this.state.reviews)
    return (
      <div>
        <Overall overall={this.state.overall} reviewsCount={this.state.reviewsCount} />
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;