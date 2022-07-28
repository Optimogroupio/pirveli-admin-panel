import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import {AppConfig} from './AppConfig';

import LoginForm from "./components/LoginForm";

import PrimeReact from 'primereact/api';

import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './assets/demo/flags/flags.css';
import './assets/demo/Demos.scss';
import './assets/layout/layout.scss';
import './App.scss';

const App = () => {
    const [inputStyle, setInputStyle] = useState('outlined');
    const [layoutMode, setLayoutMode] = useState('static');
    const [layoutColorMode, setLayoutColorMode] = useState('light')
    const [ripple, setRipple] = useState(true);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value)
    }
    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    }
    const onLayoutModeChange = (mode) => {
        setLayoutMode(mode)
    }
    const onColorModeChange = (mode) => {
        setLayoutColorMode(mode)
    }
    return (
        <div>
            <LoginForm/>
            <AppConfig rippleEffect={ripple} onRippleEffect={onRipple} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                       layoutMode={layoutMode} onLayoutModeChange={onLayoutModeChange} layoutColorMode={layoutColorMode} onColorModeChange={onColorModeChange}/>
            <CSSTransition classNames="layout-mask" timeout={{enter: 200, exit: 200}} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition>
        </div>
    );

}

export default App;
