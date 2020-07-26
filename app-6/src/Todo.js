import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <h5>{this.props.task}</h5>
        )
    }
  }
  
export default Todo;