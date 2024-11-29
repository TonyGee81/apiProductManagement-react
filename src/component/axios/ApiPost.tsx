import axios, {AxiosResponse} from "axios";
import {urlApi} from "./AxiosProvider";

const ApiPost = async (url: string, params: object, headers: object) => {

    try {
        const response: AxiosResponse = await axios.post(
            urlApi + url,
            params,
            {
                headers: headers
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
