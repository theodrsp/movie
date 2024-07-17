import { API } from "..";

const getPopularMovie = async (page:string) => {
    try {
        const response = await API.get(`/movie/popular?language=en-US&page=${page}`);
        console.log (response);

        return response.data as ResponsePopularMovie;
    } catch (error) {
        console.log(error);
    }
};

    export {getPopularMovie}