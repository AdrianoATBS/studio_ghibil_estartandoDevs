import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://ghibliapi.vercel.app/',
});

export const getAllFilms = async () => {
  const response = await api.get('films');
  return response;
}

export const getFilmById = async () => {
  const response = await api.get('films/id');
  return response;
}