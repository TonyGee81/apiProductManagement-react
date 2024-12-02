import axios, {AxiosResponse} from "axios";
import {token, urlApi} from "./AxiosProvider";

const ApiPost = async (url: string, params: object, headers: null|object= null ) => {

    let requestHeaders = {};

    if(headers)
    {
        requestHeaders = { ...requestHeaders, headers}
    }

    if(token)
    {
        requestHeaders = { ...requestHeaders, Authorization: `Bearer ${token}`}
    }

    try {
        const response: AxiosResponse = await axios.post(
            urlApi + url,
            params,
            {
                headers: requestHeaders
            },
        );

        return {
            "data": response.data,
            "status": response.status,
            "statusText": response.statusText,
        };
    } catch (err: any) {
        if (err.response) {
            if (err.response.data.code === 401) {
                delete axios.defaults.headers.common["Authorization"];
                localStorage.removeItem('token');
                window.location.href = '/';
            }

            return {
                "data": err.data,
                "err": err.response.data,
                "status": err.response.status,
                "statusText": err.response.statusText,
            };
        }
    }
}

export default ApiPost;
