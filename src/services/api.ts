import { API } from '.';

const getTopRatedMovie = async (page : string) => {
try {
    const response = await API.get(`/movie/top_rated?language=en-US&page=${page}`);
    
    console.log (response);
    return response.data as ResponseMovie;
} catch (error) {
    console.log(error);
}
};
    export { getTopRatedMovie};

