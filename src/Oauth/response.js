import React from 'react'
import {AuthorizationCodeCallback} from "react-oauth2-auth-code-flow"
import {oauthClient} from "./client"

const OAuthResponse=()=>{
   const handleSuccess = async (accessToken, { response, state }) => {
        console.log("Successfully authorized");
        console.log({
            accessToken:accessToken,
            response:response,
            state:state
        })
    };

   const handleError = (error) => {
        console.error("An error occurred");
        console.error(error.message);
    };
    return (
        <AuthorizationCodeCallback
            oauthClient={oauthClient}
            onAuthSuccess={handleSuccess}
            onAuthError={handleError}
            render={({ processing, state, error }) => (
                <div>
                    {processing && <p>Authorizing now...</p>}
                    {error && (
                        <p className="error">An error occurred: {error.message}</p>
                    )}
                </div>
            )}
        />
    );
}
export default OAuthResponse;
