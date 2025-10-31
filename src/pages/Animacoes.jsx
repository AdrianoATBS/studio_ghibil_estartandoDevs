import { useEffect, useState } from 'react';
import { getAllFilms } from '../services/api';
const Animacoes = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const filmes = async () => {
      try {
        const response = await getAllFilms();
        setFilms(response);
      } catch (err) {
        console.error('Erro ao buscar filmes:', err);
      }
    }

    filmes()
  }, []);

  return (

    <section>
      {films.map((film) => (
        <div key={film.id}>
        <img src={film.image} alt="" />
        <h1>{film.title}</h1>
        </div>
      ))}
    </section>
  )
}

export default Animacoes
