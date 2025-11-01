import { useEffect, useState } from "react";
import { getAllFilms } from "../services/api";
import AnimationCard from "../components/AnimationCard";
import { Link } from "react-router-dom";
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
        <Link key={film.id} to={`/animacoes/${film.id}`}>
          <AnimationCard img={film.image} title={film.title} />
        </Link>
      ))}

    </section>
  );
};

export default Animacoes;
