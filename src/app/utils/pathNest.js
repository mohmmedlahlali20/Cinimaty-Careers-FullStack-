import axios from "axios";
import Cookies from "js-cookie";

const nestApiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL_NEST;

const nestApi = axios.create({
    baseURL: nestApiBaseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

nestApi.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

nestApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error("Erreur avec NEST API:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default nestApi;
