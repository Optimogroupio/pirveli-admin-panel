import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OAuthRouter from "./Oauth/router"


ReactDOM.render(
    <React.StrictMode>
        {/*<ScrollToTop>*/}
        <OAuthRouter/>
        {/*<App/>*/}
        {/*</ScrollToTop>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
