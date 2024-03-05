// Contact.js
import React from 'react';

import '../css/contact.css'

import { MdMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";



function Contact() {
  return (
    <section>
      <h2>Contato</h2>
      <p>Entre em contato comigo através do email: <MdMarkEmailUnread /> <a href="mailto:gmdust@hotmail.com">gmdust@hotmail.com </a>
        Ou <FaWhatsapp /> whats: 31992120527
      </p>
    </section>
  );
}

export default Contact;
