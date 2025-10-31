import React from "react";
import "../Sobre.css";

export default function Sobre() {
  const equipe = [
    { nome: "Ryan Doreto", funcao: "Desenvolvedor Front-End" },
    { nome: "Adriano Teixeira", funcao: "Desenvolvedor Front-End" },
    { nome: "Tiago de Noronha", funcao: "Desenvolvedor Front-End" },
  ];

  return (
    <div className="container">
      <h1 className="titulo">Sobre nós</h1>

      <div className="card">
        <p className="descricao">Este projeto foi desenvolvido por:</p>

        <ul className="lista">
          {equipe.map((pessoa, index) => (
            <li key={index} className="item">
              <strong className="nome">{pessoa.nome}</strong>
              <br />
              <span className="funcao">{pessoa.funcao}</span>
            </li>
          ))}
        </ul>
      </div>

      <footer className="rodape">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </footer>
    </div>
  );
}
