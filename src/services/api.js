import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjk2ZWY4MmM5MjhjMmJhZmJiNTg5ZmE1MmYxN2NjZSIsInN1YiI6IjYxMDA4MDZkZGI3MmMwM2JmYjFmY2VhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CBKIfqOtWksBsRO35JHiyTPeVcklGJsfZKlEx1pqBds'
    }
})

const getFilms = async () => {
    const {data} = await axiosInstance('/discover/movie') || {};
    return data;
}

const getFilm = async (id) => {
    const {data} = await axiosInstance(`/movie/${id}`);
    return data;
}

export {getFilms, getFilm}