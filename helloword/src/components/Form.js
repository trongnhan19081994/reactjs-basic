import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '' ,
            comment: '',
            topic: 'react',
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comment: event.target.value
        }) 
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        }) 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log( `Username: ${this.state.username}, Comment: ${this.state.comment}, Topic: ${this.state.topic}` )
    }
    
    render() {
        const {username, comment, topic} = this.state;
        return (
            <div>
               <h3> Form Component </h3> 
               <form onSubmit = {this.handleSubmit}>
                   <label> Username </label>
                   <input type='text' value={username} onChange = {this.handleUsernameChange} />
                   <br/>
                   <label> Comments </label>
                   <textarea value={comment} onChange= {this.handleCommentsChange}> </textarea>
                   <br/>
                   <label> Topic </label>
                   <select value={topic} onChange= {this.handleTopicChange}> 
                        <option value="react"> React </option>
                        <option value="angular"> Angular </option>
                        <option value="vue"> Vue </option>
                   </select>
                   <button type="sumit"> Sumit </button>
               </form>
            </div>
        )
    }
}

export default Form
