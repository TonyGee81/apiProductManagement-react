import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AuthVerify = () => {
    const token = (localStorage.getItem("token"));
    const location = useLocation();
    useEffect(() => {


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
        <>{ token && ( <button >logout</button>) }</>
    )
}

export default AuthVerify;