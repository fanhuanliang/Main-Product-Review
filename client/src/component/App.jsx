/* eslint-disable default-case */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
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
    axios.get('/api/products/1')
      .then((response) => {
        // handle success
        console.log(response.data);
        // console.log(this.getFormattedDate(response.data));
        // let overallData = this.getFormattedDate(response.data);
        this.setState({
          reviewsCount: response.data.slice(1).length,
          overall: response.data[0],
          reviews: response.data.slice(1)
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