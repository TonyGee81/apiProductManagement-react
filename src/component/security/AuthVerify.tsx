import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AuthVerify = () => {
    const token = (localStorage.getItem("token"));
    const location = useLocation();
    useEffect(() => {


        if (!token) {
            if(location.pathname !== '/')
            {
                window.location.href = '/';
            }
        }
    }, [location.pathname, token]);

    return(
       <></>
    )
}

export default AuthVerify;