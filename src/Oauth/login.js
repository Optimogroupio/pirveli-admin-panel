import {RequestAuthorizationCode} from "react-oauth2-auth-code-flow"
import {oauthClient} from "./client"
import React from "react"

const OAuthLoginBtn = () => {
    return (
        <RequestAuthorizationCode
            oauthClient={oauthClient}
            state={{from: "/login"}}
            render={({url}) => <a href={url}>Connect </a>}
        />
    );
}

export default OAuthLoginBtn;
