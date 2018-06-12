import React, { Component } from 'react';

class Body extends Component{
  render() {
      return(
        <div>
          <h2>Body Part</h2>
          <p>{this.props.title}</p>
          <p>{this.props.id}</p>
        </div>
      );
  }
}
export default Body;
