import React, { useEffect, useState } from 'react';
import * as emailjs from 'emailjs-com';
import emailConfig from './constants';

import { 
  AiOutlinePhone, 
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineLoading3Quarters
} from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi'
import { RiMailSendLine } from 'react-icons/ri'
import { BiError } from 'react-icons/bi'
import { BsCheck2All } from 'react-icons/bs'

import { Container } from './styles';

const Form: React.FC = () => {
  const [status, setStatus] = useState<IStatus>('init');

  async function sendMail(e: any) {
    e.preventDefault();
    try{
      setStatus('loading');
      await emailjs.sendForm(
        emailConfig.serviceId, 
        emailConfig.templateId, 
        e.target, 
        emailConfig.userId
      )
      e.target.reset();
      setStatus('success');
    }catch(err){
      setStatus('error');
    }
  }

  useEffect(() => {
    if(status === 'error'){
      setTimeout(() => {
        setStatus('init');
      }, 2000)
    }
  }, [status])

  return (
    <Container id="contact">
      <section className="infoContainer">
        <h2 className="infoTitle">Contatos</h2>
        <p className="infoParagraph">
          Entre em contato através de alguma rede social de sua preferência.
        </p>
        <div className="infoCardContainer">
          <div className="infoCard">
            <AiOutlinePhone className="cardIcon" size={20} color="#333"/>
            <span className="cardDescription">+55 31 9 7140-2515</span>
          </div>
          <div className="infoCard">
            <AiOutlineMail className="cardIcon" size={20} color="#333"/>
            <span className="cardDescription">dennergazevedo@gmail.com</span>
          </div>
          <div className="infoCard">
            <AiOutlineLinkedin className="cardIcon" size={20} color="#333"/>
            <span className="cardDescription">/dennergazevedo</span>
          </div>
          <div className="infoCard">
            <AiOutlineInstagram className="cardIcon" size={20} color="#333"/>
            <span className="cardDescription">/dennergazevedo</span>
          </div>
          <div className="infoCard">
            <FiGithub className="cardIcon" size={18} color="#333"/>
            <span className="cardDescription">/dennergazevedo</span>
          </div>
        </div>
      </section>
      {
        status === 'success'?
        <section className="contactForm success">
          <BsCheck2All size={64} color="#FFF" />
          <span>Mensagem enviada com sucesso!</span>
        </section>
        :
        <form className={`contactForm ${status === 'error'? 'error' : ''}`} onSubmit={sendMail}>
          <h2 className="formTitle">Envie uma mensagem</h2>
          <div className="contactInputContainer">
            <label className="contactLabel">Nome:</label>
            <input 
              placeholder="Nome Sobrenome"
              className="contactInput" 
              name="name"
            />
          </div>
          <div className="contactInputContainer">
            <label className="contactLabel">Email:</label>
            <input 
              placeholder="email@exemplo.com"
              className="contactInput" 
              name="email"
            />
          </div>
          <div className="contactInputContainer">
            <label className="contactLabel">Assunto:</label>
            <input 
              placeholder="Sobre o que vamos falar?"
              className="contactInput" 
              name="subject"
            />
          </div>
          <div className="contactInputContainer">
            <textarea
              placeholder="Digite sua mensagem aqui..."
              className="contactTextarea" 
              name="message"
            />
          </div>
          <button 
            className={`${status === 'error'? "contactSubmitButton error" : "contactSubmitButton"}`} 
            type="submit"
          >
            {
              status === 'loading' ?
              <AiOutlineLoading3Quarters className="buttonIcon loading" size={18} color="#333"/>
              :
              status === 'error'?
              <BiError className="buttonIcon" size={18} color="#333"/>
              :
              <RiMailSendLine className="buttonIcon" size={18} color="#333"/>
            }
          </button>
        </form>
      }
    </Container>
  );
}

export default Form;