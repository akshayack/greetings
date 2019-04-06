import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={data:""
  }
  this.displayMessage=this.displayMessage.bind(this)
  };

  displayMessage(){
    var today=new Date()
    var curHr=today.getHours()
    if(curHr<12){
      this.setState({data:"Good morning Akshaya"})
    }
    else if(curHr<18){
      this.setState({data:"Good afternoon Akshaya"})
    }
    else{
      this.setState({data:"Good evening Akshaya"})
    }
  } 
  
  render(){
    return(
      <div>
        <button onClick={this.displayMessage}>click</button>
        <hi>{this.state.data}</hi>
      </div>
    );

    }
  }
  export default App;