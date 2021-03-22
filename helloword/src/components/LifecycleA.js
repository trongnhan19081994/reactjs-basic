import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           name: 'Vishwas'  
        }
        console.log('Lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps ');
        return null;
    }

    componentDidMount() {
        console.log("Lifecycle A componentDidMount");
    }

    shouldComponentUpdate(){
        console.log('Lifecycle A shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate');
    }

    changState = () => {
        this.setState({
            name: 'Codevolation'
        })
    }

    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                <button onClick={this.changState}>Change</button>
                Lifecycle A render
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA;