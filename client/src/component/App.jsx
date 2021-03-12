/* eslint-disable react/jsx-no-bind */
import React from 'react';
import axios from 'axios';
import Reviews from './ReviewsView/ReviewsView.jsx';
import Overall from './Overall/Overall.jsx';
import Pagination from './Pagination.jsx';
import SortData from './SortData/SortData.jsx';
import TopBar from './TopBar/TopBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReviews: 0,
      overall: {},
      reviews: [],
      reviewPerPage: 5,
      hiding: '0px'
    };
  }

  getRequest(number, sort) {
    axios.get(`/api/products/2?page=${number}&sort=${sort}`)
      .then((response) => {
        this.setState({
          totalReviews: response.data[0],
          reviews: response.data.slice(1)
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.getOverallRequest();
      });
  }

  getOverallRequest() {
    axios.get('/api/products/overall/2')
      .then((response) => {
        this.setState({
          overall: response.data[0]
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  }

  hiddenContent() {
    if (this.state.hiding === '0px') {
      this.setState({ hiding: 'auto' });
    } else if (this.state.hiding === 'auto') {
      this.setState({ hiding: '0px' });
    }
  }

  paginate(pageNumber) {
    this.getRequest(pageNumber);
  }

  handleSortData(e) {
    this.getRequest(1, e);
  }

  componentDidMount() {
    this.getRequest();
  }

  render() {
    const { overall, totalReviews, reviews, reviewPerPage, hiding } = this.state;
    if (!totalReviews || !overall) {
      return 'loading...';
    }
    return (
      <div className='container'>
        <TopBar totalReviews={totalReviews} hiddenContent={this.hiddenContent.bind(this)} />
        <div className='wrapper' style={{ height: hiding }}>
          <div className='style_wrapper'>
            <Overall overall={overall} totalReviews={totalReviews} />
            <SortData sortData={this.handleSortData.bind(this)} />
            <Reviews reviews={reviews} />
            <Pagination reviewPerPage={reviewPerPage} totalReviews={totalReviews} paginate={this.paginate.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;