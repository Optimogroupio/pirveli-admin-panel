import React from "react";


export default function logout() {
    openInNewTab();
    localStorage.removeItem('accessToken');
}

const openInNewTab = () => {
    window.open('http://auth.pirveli.ge/realms/xracoon-demo/protocol/openid-connect/logout',
        '_self', 'noopener,noreferrer');
};
