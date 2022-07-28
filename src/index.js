import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {HashRouter, Route} from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import LoginForm from "./components/LoginForm";

ReactDOM.render(
    <HashRouter>
        <ScrollToTop>
            {/*<Route path="/login" component={LoginForm}/>*/}
            {/*<Route path="/home" component={App}/>*/}
            <App></App>
        </ScrollToTop>
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
