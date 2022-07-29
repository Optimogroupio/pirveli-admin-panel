import React from "react";
import {useContext, createContext} from "react";
import axios from "axios";

class userService {

    tryAuth(credentials) {
        const initialState = {
            user: {},
            accessToken: undefined,
        };
        const UserContext = createContext(initialState)
        axios.post('')
            .then(res => res.data)
    }
}
