import React, { Component } from 'react';
import logo from './logo.svg';
import Movies from './Movies'
import './App.css';
import Header from './Header.js';
import Login from './Login';

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoginPage:false,
      userLoggedIn:false,
      user:''
    }
  }
  changeLogin = () => {
    this.setState({isLoginPage:true})
  }
  addUser = (user) =>{
    console.log(user)
    let data = {
      email:user.email, 
      password: String(user.password)
        }
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login',
    {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(data) 
    })
    .then(response =>response.json() )
    .then(userData =>{
      this.setState({userLoggedIn:true})
      this.setState({user:userData})
      console.log(this.state.user)
    })
    }
  render () {
    if(this.state.isLoginPage){
      return <Login addUser ={this.addUser} />
    }
    return (
    <React.Fragment>
    <Header changeLogin = {this.changeLogin} />
   <Movies userLoggedIn = {this.state.userLoggedIn}/>
  </React.Fragment>
    )
    }
  
}

export default App;
