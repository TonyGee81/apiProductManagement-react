import axios from "axios";

import {urlApi, config} from "./AxiosProvider";

const ApiGet = async (url: string, groups: string) => {

    return await axios.get(
        `${urlApi + url}?groups[]=${groups}`,
        config,
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
