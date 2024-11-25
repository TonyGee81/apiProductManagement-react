import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AuthVerify = () => {
    const location = useLocation();
    useEffect(() => {
        const token = (localStorage.getItem("token"));

        if (!token) {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
            if(location.pathname !== '/')
            {
                window.location.href = '/';
            }
        }
    }, [location.pathname]);
    return(
        <></>
    )
}

export default AuthVerify;