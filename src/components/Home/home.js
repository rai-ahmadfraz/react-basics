import React, { Component } from 'react';
import HomeChild from '../HomeChild/homechild';
class Home extends Component {

    constructor() {
        super();
        this.state = {
            component_name: "H0me",
            parent_data: {
                name: "rai",
                age: 23,
                gender: "Male"
            },
            newName: "Parent"
        }
    }
    changeName = (value) => {
        this.setState({
            newName: value
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.component_name}</p>
                <p>TO parent {this.state.newName}</p>
                <HomeChild parent_info={this.state.parent_data} changeName={this.changeName} />
            </div>);
    }
}

export default Home;