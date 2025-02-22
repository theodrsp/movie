import axios from "axios";

const axiosWitcConfig = axios.create();

axiosWitcConfig.interceptors.request.use((axiosConfig) => {
    axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
    axiosConfig.headers.Authorization =`Bearer ${
        import.meta.env.VITE_TMDB_TOKEN
    }`;

    return axiosConfig;
});

export default axiosWitcConfig