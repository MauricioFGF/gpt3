import React from "react";
import gpt3Logo from "../../logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Você que quer entrar no futuro antes dos outros
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar acesso antecipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Mídia Social</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Empresa</h4>
        <p>Termos & Condições</p>
        <p>Política de Privacidade</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>

        <p>081-99999-9999</p>
        <p>gpt3@email.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
