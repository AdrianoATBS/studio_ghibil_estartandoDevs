import { useEffect, useState } from "react";
import { getAllFilms } from "../services/api";
import AnimationCard from "../components/AnimationCard";
import "../style/AnimacoesPage.css"

const Animacoes = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const filmes = async () => {
      try {
        const response = await getAllFilms();
        setFilms(response);
      } catch (err) {
        console.error("Erro ao buscar filmes:", err);
      }
    };

    filmes();
  }, []);

  return (
    <section className="animacoes-section">
      {films.map((film) => (
        <AnimationCard key={film.id} img={film.image} title={film.title} />
      ))}
    </section>
  );
};

export default Animacoes;
