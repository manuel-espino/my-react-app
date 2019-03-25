import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JsxUses from './elements/JsxUses';
import Clock from './elements/Clock';
import * as serviceWorker from './serviceWorker';
import Toggler from './elements/Toggler';
import Greeting from './elements/Greeting';
import LoginControl from './elements/LoginControl';
import MailBox from './elements/MailBox';
import Page from './elements/Page';
import NumberList from './elements/List';
import Blog from './elements/Blog';

const l = <div>{JsxUses}</div>;

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function App() {
    return <div>
        <Welcome name="María" />
        <Welcome name="Juan" />
        <Welcome name="Pepe" />
    </div>
}


const llamada = <Welcome name="María" />
const messages = ['hola', 'adios'];
const numbers = [1, 2, 3, 4, 5, 6]

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to the jungle!'},
    {id: 2, title: 'Installation', content: 'You cant install React from npm.'}
];




ReactDOM.render(<Blog posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
