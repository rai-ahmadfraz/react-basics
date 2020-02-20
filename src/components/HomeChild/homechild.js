import React, { Component } from 'react';
import {connect} from 'react-redux';
class HomeChild extends Component {

    constructor(props) {
        super(props);
        this.state = {
         component_name:"homeChild"
        }
    }
    changeParentName = () => {
        alert("dsfds");
        this.props.changeName('Home Child Hu');
    }
    render() {
        return (
            <div>
               <p>{this.state.component_name}</p>
        <p>Parent info {this.props.user}</p>
                <p>{this.props.parent_info.name}</p>
                <button onClick={this.changeParentName}>Just Change</button>
            </div>);
    }
}

const mapStateToProps = state =>({
     user: state.user
})
export default connect(mapStateToProps,null)(HomeChild);