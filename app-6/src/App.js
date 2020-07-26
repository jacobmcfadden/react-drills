import React, { Component } from 'react';
import './App.css';

import Todo from './Todo'

class App extends Component {
  constructor() {
    super();

    this.state = {
      correctList: [],
      userInput: ''
    }
    this.addToList = this.addToList.bind(this);
  }

  handleChange(userInput){
    this.setState({
      userInput: userInput
    })
  }

  addToList() {
    this.setState({
      correctList: [...this.state.correctList, this.state.userInput],
      userInput: ''
    });
  }

  render(){
    let list = this.state.correctList.map((element) => {
      return <Todo task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input type="text" onChange={(e) => {this.handleChange(e.target.value)}}/>
          <button onClick={this.addToList}>Add</button>
        </div>
        <br/>
        {list}
      </div>
    )
  }
}

export default App;
