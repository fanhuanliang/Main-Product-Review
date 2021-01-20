import React from 'react';
import ReactDOM from 'react-dom';

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
    return (
      <h2>overall</h2>
    );
  }
}

export default Overall;
