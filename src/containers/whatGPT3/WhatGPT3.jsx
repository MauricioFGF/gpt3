import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="O que é GPT-3"
        text="O Chat GPT é uma ferramenta de inteligência artificial que usa processamento de linguagem natural para gerar respostas a partir de suas perguntas."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        As possibilidades estão além da sua imaginação
      </h1>
      <p>Explorar a Biblioteca</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Use para construir um robo para coonversar e dar suporte para os acessos de conversação do seu negócio."
      />
      <Feature
        title="Base de conhecimento"
        text="Use como base para outras IA's aprenderem e evoluirem."
      />
      <Feature
        title="Educação"
        text="É possível aprender muito com o suporte do GTP-3."
      />
    </div>
  </div>
);

export default WhatGPT3;
