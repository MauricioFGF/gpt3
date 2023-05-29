import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Respostas a Perguntas",
    text: " Você pode fazer perguntas ao ChatGPT e ele tentará fornecer respostas relevantes com base no seu conhecimento prévio.",
  },
  {
    title: "Geração de Texto",
    text: "GPT-3 é capaz de gerar texto coerente e contextualmente relevante para continuar uma conversa. Ele pode fornecer explicações, detalhes adicionais ou discutir tópicos relacionados.",
  },
  {
    title: "Conversas Interativas",
    text: "O GPT-3 pode manter conversas interativas e responder a uma série de perguntas e respostas consecutivas. Ele tenta manter o contexto da conversa para responder de forma mais precisa.",
  },
  {
    title: "Geração Criativa",
    text: "O GPT-3 também pode gerar histórias, poemas, piadas e outros tipos de conteúdo criativo com base em prompts fornecidos.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        O Futuro é agora e você Só precisa concretizá-lo hoje. Faça acontecer.
      </h1>
      <p>Solicite acesso antecipado para começar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
