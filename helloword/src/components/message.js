import React, {Component} from 'react';

class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome visitor',
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank out for visitor',
        })
    }

    render(){
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick = { () => this.changeMessage() }> Submit </button>
            </div>
        )
    }
}

export default Message;