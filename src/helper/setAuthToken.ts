import axios from 'axios';

export const setAuthToken = (token: string, login: string) => {
    if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("login", login);
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}