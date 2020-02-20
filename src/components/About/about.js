import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addUser}  from '../../actions/user';
class About extends Component {
    constructor(){
        super();
        this.state={
            show:false,
            array :[1,2,3,4,5,6,7],
            user:{
                name:"Rai Ahmad",
                age:22,
                gender:"Male"
            }
        }
    }
    render() { 
        return (
        <div>
             <h1>About</h1>
              <button onClick={()=>this.props.addNewUser(this.state.user)}>Click </button>
             <div> description</div>
        <h1>Let see {this.props.user.name}</h1>
             {this.state.show ?  
             <div> div to show</div> :
            <div> div to hide</div> }
           
           {this.state.array.map(arraydata =>
            <p key={arraydata}>{arraydata}</p>
            )}

             
            </div> );
    }
}
const mapStateToProps = state => ({
    user: state.user
  });
 
  const mapDispatchToProps = dispatch =>{
      return{
        addNewUser : (user) => dispatch(addUser(user))
      }
  }
export default  connect(mapStateToProps, mapDispatchToProps)( About);