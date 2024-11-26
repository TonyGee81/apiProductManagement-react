import { useEffect } from "react";
import axios from "axios";

function HasToken(){
    const token = (localStorage.getItem("token"));
    useEffect(() => {


        if (!token) {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
    }, [token]);

    return(
        token
    )
}

export default HasToken;