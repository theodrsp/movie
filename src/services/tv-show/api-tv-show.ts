import { API } from '..';

const getTVShowMovie = async (page:string) => {
try {
    const response = await API.get(`/tv/airing_today?language=en-US&page=${page}`);
    
    console.log (response);
    
    return response.data as ResponseTVShow;
} catch (error) {
    console.log(error);
}
};
    export { getTVShowMovie};