import React, { useState } from 'react';
import '../css/contact.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = 'gmdust@hotmail.com';

  function copyEmail() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contact" className="contactSection">
      <h2>Contato</h2>
      <p className="contactSubtitle">Aberto a oportunidades — fique à vontade para entrar em contato.</p>
      <div className="contactLinks">
        <a href={`mailto:${email}`} className="contactItem">
          <MdEmail className="contactIcon" />
          <span>{email}</span>
        </a>
        <button className="contactItem copyBtn" onClick={copyEmail}>
          <MdEmail className="contactIcon" />
          <span>{copied ? 'Copiado!' : 'Copiar e-mail'}</span>
        </button>
        <a href="https://www.linkedin.com/in/carlos-carvalho-262131187/" target="_blank" rel="noopener noreferrer" className="contactItem">
          <FaLinkedin className="contactIcon" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/Betinsk" target="_blank" rel="noopener noreferrer" className="contactItem">
          <FaGithub className="contactIcon" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
