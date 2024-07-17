import axios from "axios";

const axiosWitcConfig = axios.create();

axiosWitcConfig.interceptors.request.use((axiosConfig) => {
    axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
    axiosConfig.headers.Authorization =`Bearer ${
        import.meta.env.VITE_TMDB_Token
    }`;

    return axiosConfig;
});

export default axiosWitcConfig