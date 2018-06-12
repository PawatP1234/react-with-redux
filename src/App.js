import React, { Component } from 'react';
import User from './user.js';
import { connect } from 'react-redux';
class App extends Component {
  render() {
      return(
        <div>
          <User username={this.props.user.name}/>
          <button onClick={()=>this.props.setName('Test')}>Change Name</button>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    salary: state.salary,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName : (name) =>{
      dispatch({
        type: 'setName',
        payload: name,
      });
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
