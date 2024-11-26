import { useEffect } from "react";
import axios from "axios";

function HasToken(){
    const token = (localStorage.getItem("token"));
    useEffect(() => {
        if (!token) {
            localStorage.removeItem('token');
            localStorage.removeItem('login');
        }
    }, [token]);

    return(
        token
    )
}

export default HasToken;