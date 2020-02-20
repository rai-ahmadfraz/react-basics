import React, { Component } from 'react';
class Contact extends Component {
    constructor() {
        super();
        this.state = {
           fistname:"",
           lastname:""

        }

    }
    MangeInputValues = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    saveInfo = () =>{
        alert(this.state.firstname + " "+ this.state.lastname );
    }
    render() {
        return (
            <div>
                <p>{this.state.firstname}</p>
                <p>{this.props.history.path}</p>
                <h1>Contact</h1>
                <input type="text" name="firstname" onChange={this.MangeInputValues} />
                <input type="text" name="lastname" onChange={this.MangeInputValues}/>
                <button onClick={this.saveInfo}>Save</button>
            </div>
        );
    }
}

export default Contact;