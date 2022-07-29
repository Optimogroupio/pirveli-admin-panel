import ClientOAuth2 from "client-oauth2"

export const oauthClient = new ClientOAuth2({
    clientId: 'demo-client',
    clientSecret: 'dd1zsKouT3UtZHiP6bJ6YCjIVTO1YPrZ',
    accessTokenUri: `http://auth.pirveli.ge/realms/xracoon-demo/protocol/openid-connect/token`,
    authorizationUri: "http://auth.pirveli.ge/realms/xracoon-demo/protocol/openid-connect/auth",
    redirectUri: `http://localhost:3000/home`,
    scopes: ["read"],
});
