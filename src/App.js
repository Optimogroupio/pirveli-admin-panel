import React, {useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';

import {AppConfig} from './AppConfig';
import Service from "./components/Service";
import PrimeReact from 'primereact/api';
import Contract from "./components/Contract";
import Payment from "./components/Payment";

import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './assets/demo/flags/flags.css';
import './assets/demo/Demos.scss';
import './assets/layout/layout.scss';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AppMenu} from "./AppMenu";
import classNames from "classnames";
import OAuthLoginBtn from "./Oauth/login";
import OAuthResponse from "./Oauth/response";
import PrivateRoute from "./PrivateRoute";
import {AppTopbar} from "./AppTopbar";
import {menu} from "./utils/menu";
import logout from "./Oauth/logout";

const App = () => {
    const [layoutMode, setLayoutMode] = useState('static');
    const [layoutColorMode, setLayoutColorMode] = useState('light')
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(true);
    const [staticMenuInactive, setStaticMenuInactive] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [tokenIsValid, setTokenIsValid] = useState(localStorage.getItem('accessToken'));
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);


    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;

    useEffect(() => {
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [mobileMenuActive, tokenIsValid]);

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    }

    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value)
    }

    const onLayoutModeChange = (mode) => {
        setLayoutMode(mode)
    }

    const onColorModeChange = (mode) => {
        setLayoutColorMode(mode)
    }

    const onWrapperClick = (event) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }

        // if (!mobileTopbarMenuClick) {
        //     setMobileTopbarMenuActive(false);
        // }

        mobileTopbarMenuClick = false;
        menuClick = false;
    }

    const onToggleMenuClick = (event) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === 'overlay') {
                if (mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }

                setOverlayMenuActive((prevState) => !prevState);
                setMobileMenuActive(false);
            } else if (layoutMode === 'static') {
                setStaticMenuInactive((prevState) => !prevState);
            }
        } else {
            setMobileMenuActive((prevState) => !prevState);
        }

        event.preventDefault();
        console.log(tokenIsValid)
    }

    const onSidebarClick = () => {
        menuClick = true;
    }

    const onMobileTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        setMobileTopbarMenuActive((prevState) => !prevState);
        event.preventDefault();
    }

    const onMobileSubTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        event.preventDefault();
    }

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    }
    const isDesktop = () => {
        return window.innerWidth >= 992;
    }

    const addClass = (element, className) => {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    const removeClass = (element, className) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    const wrapperClass = classNames('layout-wrapper', {
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-static-sidebar-inactive': staticMenuInactive && layoutMode === 'static',
        'layout-overlay-sidebar-active': overlayMenuActive && layoutMode === 'overlay',
        'layout-mobile-sidebar-active': mobileMenuActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false,
        'layout-theme-light': layoutColorMode === 'dark'
    });

    function changeToken() {
        return setTokenIsValid(true);
    }


    return (
        <>
            <div className={wrapperClass} onClick={onWrapperClick}>
                <Router>
                    <Routes>
                        <Route element={<OAuthLoginBtn/>} path='/' exact/>
                        <Route>
                            <Route element={<OAuthResponse parentCallBack={changeToken}/>} path='/home' exact/>
                        </Route>
                    </Routes>
                    {tokenIsValid
                        ? <div>
                            <AppTopbar onToggleMenuClick={onToggleMenuClick} layoutColorMode={layoutColorMode}
                                       mobileTopbarMenuActive={mobileTopbarMenuActive}
                                       onMobileTopbarMenuClick={onMobileTopbarMenuClick}
                                       onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick} logout={logout}/>
                            <div className="layout-sidebar" onClick={onSidebarClick}>
                                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode}/>
                            </div>
                            <div className="layout-main-container">
                                <div className="layout-main">
                                    <Routes>
                                        <Route element={<PrivateRoute/>}>
                                            <Route element={<Contract/>} path="/contracts" exact/>
                                            <Route element={<Payment/>} path="/payments" exact/>
                                            <Route element={<Service/>} path="/services" exact/>
                                        </Route>
                                    </Routes>
                                </div>
                            </div>
                        </div>
                        : <h1>Not Authorized</h1>
                    }
                </Router>
                <AppConfig rippleEffect={ripple} onRippleEffect={onRipple} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                           layoutMode={layoutMode} onLayoutModeChange={onLayoutModeChange} layoutColorMode={layoutColorMode} onColorModeChange={onColorModeChange}/>
                <CSSTransition classNames="layout-mask" timeout={{enter: 200, exit: 200}} in={mobileMenuActive} unmountOnExit>
                    <div className="layout-mask p-component-overlay"></div>
                </CSSTransition>
            </div>
        </>
    );

}

export default App;
