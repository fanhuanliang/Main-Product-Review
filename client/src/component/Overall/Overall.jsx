import React from 'react';
import Rating from '../Rating/Rating.jsx';
import BarRating from '../BarRating.jsx';
import WriteReview from '../WriteReview/WriteReview.jsx';
import './Overall.scss';

class Overall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writeReview: false
    };
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit() {
    this.setState({ writeReview: true });
  }

  render() {
    const { difficulty, experience, rate1, rate2, rate3, rate4, rate5, rating, recommendToOther, number_review, value_money, ratePercentage1, ratePercentage2, ratePercentage3, ratePercentage4, ratePercentage5 } = this.props.overall;

    const barData = [
      { 'id': 5, 'ratePercentage': ratePercentage5, 'rate': rate5 },
      { 'id': 4, 'ratePercentage': ratePercentage4, 'rate': rate4 },
      { 'id': 3, 'ratePercentage': ratePercentage3, 'rate': rate3 },
      { 'id': 2, 'ratePercentage': ratePercentage2, 'rate': rate2 },
      { 'id': 1, 'ratePercentage': ratePercentage1, 'rate': rate1 }
    ];
    const starRating = { 'star': rating };

    return (
      <div className='overview'>
        <div className='overview-wrapper'>
          <div className='overallRating'>
            <div>
              Overall Rating
              <button className='review-btn' type='button' onClick={() => this.handleSubmit()}>
                Write a Review
              </button>
              <div className='rating'>
                <Rating value={starRating} />
                <div className='count-space'>
                  <span className='count-reviews'>
                    {rating}
                    <span>
                      (
                      {this.props.totalReviews}
                      Reviews
                      )
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className='recommend'>
            {recommendToOther}
            would recommend this product.
          </span>

          <div className='middle-part'>
            <div className='rating-box'>
              <div className='left-part'>
                <p>Rating</p>
                <div className='rating-part'>
                  {barData.map((bar) => (
                    <BarRating bar={bar} key={bar.id} />
                  ))}
                </div>
              </div>
            </div>
            <div className='overall-experience'>
              <p>Overall Experience</p>
              <div>
                <p>Play Experience</p>
                <div className='rating-experience'>
                  <Rating value={experience} />
                  <span className='count-space'>{experience}</span>
                </div>
                <p>Level of Difficulty</p>
                <div className='rating-experience'>
                  <Rating value={difficulty} />
                  <span className='count-space'>{difficulty}</span>
                </div>
                <p>Value for Money</p>
                <div className='rating-experience'>
                  <Rating value={value_money} />
                  <span className='count-space'>{value_money}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WriteReview open={this.state.writeReview} onClose={() => this.setState({ writeReview: false })} />
      </div>
    );
  }
}

export default Overall;