import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">
        As possibilidades são <br /> alem da sua imaginação
      </h1>
      <p>
        O GPT é treinado em um grande volume de texto em linguagem natural,
        proveniente de diversas fontes, como livros, artigos, sites e outros.
        Esse treinamento massivo permite que o modelo adquira um conhecimento
        amplo e uma compreensão da estrutura e do uso da linguagem.
      </p>
      <h4>Solicite acesso antecipado para começar</h4>
    </div>
  </div>
);

export default Possibility;
