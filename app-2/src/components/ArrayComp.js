import React, {Component} from 'react';

class ArrayComp extends Component {
    constructor(){
        super();

        this.state = {
            exampleArray: ['spaghetti', 'Ice cream', 'sushi', 'bologna', 'cheese']
        }
    }

    render(){
        return(
            this.state.exampleArray.map((item, i) => {
            return <h2>{item}</h2>
            })
        )
    }
}

export default ArrayComp;