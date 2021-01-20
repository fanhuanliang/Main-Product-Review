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
      overall: [],
      reviews: []
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getFormattedDate(data) {
    let rate1 = 0;
    let rate2 = 0;
    let rate3 = 0;
    let rate4 = 0;
    let rate5 = 0;
    let difficulty1 = 0;
    let difficulty2 = 0;
    let difficulty3 = 0;
    let difficulty4 = 0;
    let difficulty5 = 0;
    let experience1 = 0;
    let experience2 = 0;
    let experience3 = 0;
    let experience4 = 0;
    let experience5 = 0;
    let value1 = 0;
    let value2 = 0;
    let value3 = 0;
    let value4 = 0;
    let value5 = 0;
    let recommend = 0;

    for (const i of data) {
      switch (i.overall_rate) {
      case 5: rate5++;
        break;
      case 4: rate4++;
        break;
      case 3: rate3++;
        break;
      case 2: rate2++;
        break;
      case 1: rate1++;
        break;
      }
      switch (i.level_difficulty) {
      case 5: difficulty5++;
        break;
      case 4: difficulty4++;
        break;
      case 3: difficulty3++;
        break;
      case 2: difficulty2++;
        break;
      case 1: difficulty1++;
        break;
      }
      switch (i.value_for_money) {
      case 5: value5++;
        break;
      case 4: value4++;
        break;
      case 3: value3++;
        break;
      case 2: value2++;
        break;
      case 1: value1++;
        break;
      }
      switch (i.play_experience) {
      case 5: experience5++;
        break;
      case 4: experience4++;
        break;
      case 3: experience3++;
        break;
      case 2: experience2++;
        break;
      case 1: experience1++;
        break;
      }
      switch (i.recommend) {
      case 1: recommend++;
        break;
      }
    }

    let rating = ((5 * rate5 + 4 * rate4 + 3 * rate3 + 2 * rate2 + 1 * rate1) / data.length).toFixed(2);
    let difficulty = ((5 * difficulty5 + 4 * difficulty4 + 3 * difficulty3 + 2 * difficulty2 + 1 * difficulty1) / data.length).toFixed(2);
    let experience = ((5 * experience5 + 4 * experience4 + 3 * experience3 + 2 * experience2 + 1 * experience1) / data.length).toFixed(2);
    let value = ((5 * value5 + 4 * value4 + 3 * value3 + 2 * value2 + 1 * value1) / data.length).toFixed(2);
    // eslint-disable-next-line prefer-template
    let recommendToOther = Math.floor((recommend / data.length) * 100) + '%';
    return [{
      'rating': rating,
      'difficulty': difficulty,
      'experience': experience,
      'value': value,
      'rate1': rate1,
      'rate2': rate2,
      'rate3': rate3,
      'rate4': rate4,
      'rate5': rate5,
      'recommendToOther': recommendToOther,
      'numberOfReviews': data.length
    }];
  }

  getRequest() {
    axios.get('/api/products/1')
      .then((response) => {
        // handle success
        // console.log(response.data);
        // console.log(this.getFormattedDate(response.data));
        let overallData = this.getFormattedDate(response.data);
        this.setState({
          overall: overallData,
          reviews: response.data
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
        <h1>Customer Reviews</h1>
        <Overall overall={this.state.overall} />
        {/* <Reviews reviews={this.state.reviews} /> */}
      </div>
    );
  }
}

export default App;