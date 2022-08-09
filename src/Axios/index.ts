import axios from "axios";

const customURL = axios.create({
    baseURL:'http://localhost:5000/',
});

const custom = customURL.interceptors.request.use(
    async (config) =>{
        const token =localStorage.getItem('access_token');
        config.headers = {
            'x-access-token':`${token}`,
        };
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }    
);

