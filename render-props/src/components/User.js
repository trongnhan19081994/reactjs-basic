import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {this.props.children(true)}
            </div>
        )
    }
}

export default User
