import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './userlist'
import UserData from "./userdata";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state={index:''} 
}  

change=inx=>{
        localStorage.setItem('count',JSON.stringify(inx))
        this.setState({index:inx})
    }

    rec=dat=>{
      console.log(dat);
    }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
      <Route path="/" render={(props)=><UserList delf={this.change} /> } send={this.rec} exact  />
      <Route path="/UserData"  render={(props)=><UserData {...props} fetchInitialData={this.state.index}/> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
