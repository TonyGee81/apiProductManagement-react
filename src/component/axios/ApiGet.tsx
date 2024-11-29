import axios from "axios";

import {urlApi} from "./AxiosProvider";

const ApiGet = async (url: string, groups: string, headers: object) => {

    return await axios.get(
        `${urlApi + url}?groups[]=${groups}`,
        {
            headers: headers
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
        }
        return errorCode;
    });

}

export default ApiGet;
