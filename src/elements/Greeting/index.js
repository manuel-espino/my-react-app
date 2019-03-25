import * as React from 'react';

function UserGreeting(props){
    return <h1>Wellcome back!</h1>;
}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>
}

export function LoginButton(props){
    return (
        <button onClick={props.onClick}>Login</button>
    )
}
export function LogoutButton(props){
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}


function Greeting(props){

    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting/>;
    }
    return <GuestGreeting/>
}

export default Greeting;