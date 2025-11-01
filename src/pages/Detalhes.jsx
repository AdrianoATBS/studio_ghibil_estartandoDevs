import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilmById } from "../services/api";
import '../style/DetalhesAnimacao.css';
import Loader from "../components/Loader";
export default function Detalhes() {
    const {id} = useParams();
    const[filme, setFilme] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchFilmesDetails = async () =>{
            try{
                const response = await getFilmById(id);
                setFilme(response);
            }catch(err){
                console.error("Erro ao buscar detalhes do filme:", err);
            }finally{
                setLoading(false);
            }
        }

        fetchFilmesDetails();
    }, [id]);
   
    if(loading){
        return <Loader />;
    }

    return (
        <div className="card-detalhes">
           <h1>{filme.title}</h1>
           <img className="imagem-filme" src={filme.image} alt={filme.title} />
           <p><strong>Diretor: </strong> {filme.director}</p>
           <p><strong>Ano de Lançamento: </strong> {filme.release_date}</p>
           <p><strong>Descrição: </strong> {filme.description}</p>
        </div>
    );
}
