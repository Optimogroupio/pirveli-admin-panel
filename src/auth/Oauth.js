import React, {Component} from "react";
import {RequestAuthorizationCode} from "react-oauth2-auth-code-flow";
import ClientOAuth2 from "client-oauth2";

const oauthClient = new ClientOAuth2({
    clientId: 'demo-client',
    clientSecret: 'dd1zsKouT3UtZHiP6bJ6YCjIVTO1YPrZ',
    accessTokenUri: `http://auth.pirveli.ge/realms/xracoon-demo/protocol/openid-connect/token`,
    authorizationUri: "http://auth.pirveli.ge/realms/xracoon-demo/protocol/openid-connect/auth",
    redirectUri: `http://localhost:3000/home`,
    scopes: ["read"],
});


export default function SendToDropbox() {

    return (
        <RequestAuthorizationCode
            oauthClient={oauthClient}
            render={({url}) => {
                return <a href={url}>Log In</a>
            }}
        />
    );
}

