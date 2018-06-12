import React, { Component } from 'react';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      message:"On",
      type:""
    };
    this.changeMessage=this.changeMessage.bind(this);
  }
  changeMessage(){
    this.setState({message:"Off"});
  }
  onChange(event){
    this.setState({type:event.target.value});
  }
  render() {
      return(
        <div>
          <Header/>
          <Body title="Test Props" id="10"/>
          <Footer/>
          <button onClick={this.changeMessage}>{this.state.message}</button><br/><br/>
          <input type="text" onChange={this.onChange.bind(this)}/>
          <p>Type : {this.state.type}</p>
        </div>
      );
  }
}

export default App;
