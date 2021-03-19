import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Hello 2'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: 'Hello 2'
        })
    }
    
    render() {
        return (
            <div>
                <h3> {this.state.message} </h3>
                {/* <button onClick = { this.clickHandler.bind(this) }> Event bind</button> */}
                {/* <button onClick = { () => this.clickHandler() }> Event bind</button> */}
                <button onClick = { this.clickHandler }> Event bind</button>
            </div>
        )
    }
}

export default EventBind
