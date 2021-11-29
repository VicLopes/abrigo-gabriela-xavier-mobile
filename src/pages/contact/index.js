import React from "react";
import { Telephone, Email, ArrowRight, LinkedinIcon, FacebookIcon, TwitterIcon } from "../../assets";
import { Input } from "../../components";
import "./styles.scss";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h2>Contato</h2>
        <p>
          Em atividade desde o final de 2017, o abrigo nasceu quando a protetora
          Gabriela Xavier junto com outra protetora da região de Tatuí se uniram
          por amor e respeito aos animais.
        </p>
      </div>
      <div className="contact-forms">
        <h3>Informações de Contato</h3>
        <p>Endereço</p>
        <p>
          <Telephone />
          (00) 0000-0000
        </p>
        <p>
          <Email />
          e-mail/e-mail
        </p>
      </div>
      <div className="contact-networks">
        <h3>Redes Sociais</h3>
        <div>
          <a href="https://facebook.com">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com">
            <TwitterIcon />
          </a>
          <a href="https://linkedin.com">
            <LinkedinIcon />
          </a>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Não implementado");
        }}
      >
        <Input
          name="nome"
          label="Nome"
          placeholder="Ananda Alves"
          required
        />
        <Input
          name="email"
          label="E-mail"
          placeholder="e-mail"
          required
        />
        <Input
          name="mensagem"
          label="Mensagem"
          placeholder="Olá..."
          required
        />
        <button type="submit">
          Enviar <ArrowRight fill="white" />
        </button>
      </form>
    </div>
  );
}
