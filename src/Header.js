import React, { Component } from 'react';

class Header extends Component{
  constructor(){
    super();
    this.state={
      name:"On"
    };
  }
  render() {
      setTimeout(()=>{
        this.setState({name:"Off"});
      },500);
      return(
        <div>
          <h1>Hello World</h1>
          <h2>{this.state.name}</h2>
        </div>
      );
  }
}
export default Header;
