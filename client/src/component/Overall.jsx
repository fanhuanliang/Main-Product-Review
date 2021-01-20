import React from 'react';
import ReactDOM from 'react-dom';
// import StarRatings from 'react-star-ratings';
import { FaStar } from 'react-icons/fa';

class Overall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      // overall_rating: ''
    };
  }

  render() {
    console.log(this.props.overall);
    const { difficulty, experience, rate1, rate2, rate3, rate4, rate5, rating, recommendToOther, numberOfReviews, value } = this.props.overall;
    return (
      <div>
        <h2>Customer Reviews({numberOfReviews})</h2>
        {/* <FaStart /> */}
        <p>{recommendToOther}would recommend this product.</p>
        <div>
          <div>Rating</div>
          <div>5 stars {rate5} Reviews</div>
          <div>4 stars {rate4} Reviews</div>
          <div>3 stars {rate3} Reviews</div>
          <div>2 stars {rate2} Reviews</div>
          <div>1 stars {rate1} Reviews</div>
        </div>
      </div>
    );
    // return (
    //   <div>
    //     <FaStar size= {100}/>
    //   </div>
    // );
  }
}

export default Overall;
