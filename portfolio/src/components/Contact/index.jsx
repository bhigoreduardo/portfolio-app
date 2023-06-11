import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.style.scss";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <div className="contact">
      <form ref={form} onSubmit={handleSubmit} className="contact--form">
        <h2>Envie uma mensagem</h2>
        <input
          type="email"
          name="email"
          placeholder="Informe seu email"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Informe seu nome"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Informe seu whatsapp"
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Digite sua ideia ou necessidade"
          required
        ></textarea>
        <button type="submit">Enviar mensagem</button>
        {success && (
          <span className="contact--form-message">
            Mensagem enviada com sucesso! Logo entrarei em contato
          </span>
        )}
      </form>
    </div>
  );
}

export default Contact;
