import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        Muita coisa está acontecendo, <br /> estamos escrevendo sobre isso.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="29 de Maio de 2023"
          text="O GPT-3 demonstrou ser capaz de realizar uma variedade de tarefas, como tradução automática, redação de código, resumo de textos, criação de histórias e diálogos, entre outras."
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="29 de Maio de 2023"
          text="Uma das capacidades do GPT-3 é o ajuste fino personalizado, onde o modelo pode ser adaptado para tarefas específicas com dados rotulados adicionais. Isso permite que ele seja aplicado em uma ampla gama de domínios e casos de uso."
        />
        <Article
          imgUrl={blog03}
          date="29 de Maio de 2023"
          text="Pesquisadores exploraram técnicas para controlar a geração de texto do GPT, permitindo especificar o estilo, o tom ou até mesmo a personalidade desejada para o texto gerado."
        />
        <Article
          imgUrl={blog04}
          date="29 de Maio de 2023"
          text="Houve experimentos com o uso do GPT para auxiliar em tarefas médicas, como análise de registros médicos, resumos de artigos científicos e sugestões de tratamento."
        />
        <Article
          imgUrl={blog05}
          date="29 de Maio de 2023"
          text="GPT-3 Developer API"
        />
      </div>
    </div>
  </div>
);

export default Blog;
