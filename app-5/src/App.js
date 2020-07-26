import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  constructor(){
    super();

    this.state = {
      imageUrl: 'https://via.placeholder.com/400'
    }
  }

  render() {
      return (
        <div className="App">
           <Image url= {this.state.imageUrl}/>
        </div>
      )
  }
}

export default App;
