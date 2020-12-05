import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';




class Greeting extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.logout();
    }

    render() {
        let display;
        if (this.props.currentUser) {
            display = (
                <div>
                    <p>Hello, {this.props.currentUser.username}</p>
                    <button onClick={this.handleClick}>Logout</button>
                    {/* <button onClick={(e) => logout()}>Logout</button> */}
                </div>
            )
        } else {
            display = (
                <div>
                    <Link className="btn" to="/signup">Signup</Link>
                    <br/>
                    <Link className="btn" to="/login">Login</Link>
                </div>
            )
        }

        return(
            <div>
                <h1>Greeting</h1>
                {display}
            </div>
        );
    }

}


export default Greeting;