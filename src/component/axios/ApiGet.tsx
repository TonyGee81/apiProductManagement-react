import axios from "axios";

const variables = require('./AxiosProvider');

const ApiGet = async (url: string) => {

    return await axios.get(
        variables.urlApi + url,
        variables.config
    ).then(
        response => {
            // Get token from response
            return response.data;
        }
    ).catch(err => {
        const errorCode = err.response ? err.response.data.code : null;
        if (errorCode === 401) {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
        return errorCode;
    });

}

export default ApiGet;
