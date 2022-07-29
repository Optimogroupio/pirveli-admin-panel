import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import OAuthResponse from "./response"
import OAuthLoginBtn from "./login"
const OAuthRouter = () =>{
    return  <Router>

                <Routes>
                    <Route element={<OAuthLoginBtn/>} path='/' exact={true}/>
                </Routes>
                <Routes>
                    <Route element={<OAuthResponse/>} path='/home' exact={true}/>
                </Routes>
        </Router>
}


export default OAuthRouter
