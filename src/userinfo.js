import React from 'react';
import './css.css';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

class UserInfo extends React.Component{
    constructor(props){
        super(props)
    }

    click(e,par){
        e.preventDefault();
        this.props.delf(par);
    }

    render(){

        return <div className="child" onClick={event=>this.click(event,this.props.index)} >
        <Link to='/UserData' className='link' >
                Name: {this.props.name}<br/>
                Username: {this.props.username}<br/>
                Email: {this.props.email}<br/>
                </Link>
            </div>
    }
}

export default UserInfo