import axios from "axios";
import {urlApi, token} from "./AxiosProvider";

const ApiGet = async (url: string, groups: string, headers: null|object= null ) => {

    let requestHeaders = {};

    if(headers)
    {
        requestHeaders = { ...requestHeaders, headers}
    }

    if(token)
    {
        requestHeaders = { ...requestHeaders, Authorization: `Bearer ${token}`}
        //axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
    }

    return await axios.get(
        `${urlApi + url}?groups[]=${groups}`,
        {
            headers: requestHeaders
        },
    ).then(
        response => {
            return response.data;
        }
    ).catch(err => {
        const errorCode = err.response ? err.response.data.code : null;
        if (errorCode === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('login');
            window.location.href = '/';
        }
        return errorCode;
    });

}

export default ApiGet;
