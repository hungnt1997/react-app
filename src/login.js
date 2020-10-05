
import { buildQueries } from '@testing-library/react';
import React, { Component } from 'react';


function UserGreeting(props){
    return <h1> Welcome back! </h1>
}

function GuestGreeting(props){
    return <h1> Please sign up. </h1>
}
function Greeting(props){
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
        return <UserGreeting />
    }
        return <GuestGreeting />;
}


function LoginButton(props){
    return <button onClick={props.onClick}> Login </button>
}
function LogoutButton(props){
    return <button onClick={props.onClick}> Logout </button>

}
class LoginControl extends React.Component{
    state = {
        isLogin: false
    }
    handleLoginClick = () => {
        this.setState({
            isLogin:true
        })
    }
    handleLogoutClick = () =>{
        this.setState({
            isLogin: false
        })
    }
    render(){
        const login = this.state.isLogin
        let button; 
        if( login){
            button = <LogoutButton onClick={this.handleLogoutClick} />
        }
        else{
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return <div>
        <Greeting isLoggedIn={login}/>
        {button}
        </div>
    }

}
export default LoginControl