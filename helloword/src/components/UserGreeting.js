import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true
        }
    }
    

    render() {
        let message;
        if(this.state.isLoggedIn) {
            message = <h3> Wellcome Vishwas </h3>;
        } else {
            message = <h3> Wellcome User Guest </h3>;
        }
        return (
            this.state.isLoggedIn && <h3> Wellcome Vishwas </h3>
            // <div>
            //     { 
            //         //(this.state.isLoggedIn) ? <h3> Wellcome Vishwas </h3> : <h3> Wellcome User Guest </h3>
            //         message
            //     }
            // </div>
        )
    }
}

export default UserGreeting
