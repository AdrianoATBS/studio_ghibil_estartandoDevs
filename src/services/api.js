import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ghibliapi.vercel.app/',
});

export const getAllFilms = async () => {
    const response = await api.get('films');
    return response.data; 

}

export const getFilmById = async (id) => {
    const response = await api.get(`films/${id}`);
    return response.data;
 
}
