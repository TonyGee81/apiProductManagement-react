import axios from 'axios';

export const setAuthToken = (token: string) => {
    if (token) {
        // Set token JWT to local
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; console.log(localStorage);
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}