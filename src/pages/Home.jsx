import React, { useEffect } from 'react';
import '../style/StyleHome.css';
import { useState } from 'react';
import { getAllFilms } from '../services/api';

export default function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const fetchFilmes = async () => {
            try {
                const response = await getAllFilms();
                setFilmes(response);
            }
            catch (error) {
                console.error('Erro ao buscar filmes:', error);
            }
        };
        fetchFilmes();
    }, []);

    return (
        <div className='home' >
           <h1 className='bem-vindo'>Bem-vindo à Home</h1> 
           <p>Conheça algumas das animações incríveis do Studio Ghibli!</p>
            <div className='filmes'>
                {filmes.slice(0, 2).map((filme) =>(
                    <div key={filme.id} className='filme-card'>
                       <img src={filme.image} alt={filme.title} />
                        <h2>{filme.title}</h2>
                        <p><strong>Diretor:</strong> {filme.director}</p>
                        <p><strong>Ano de Lançamento:</strong> {filme.release_date}</p>
                        <p>{filme.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
