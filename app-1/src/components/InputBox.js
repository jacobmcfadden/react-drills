import React, {Component} from 'react';

class InputBox extends Component {
    constructor(){
        super();

        this.state = {
            userInput: '',
            output: ''
        }
    }

    handleChange(userInput){
        this.setState({
            userInput: userInput
        })
    }

    render() {
        return (
            <div>
            <input type="text" onChange={(e) => {this.handleChange(e.target.value)}}/>
            <p>{this.state.userInput}</p>
            </div>
        )
    }
}

export default InputBox;