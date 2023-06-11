import {
  FaMobileAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarked,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

import "./Social.style.scss";

function Social() {
  return (
    <div className="social">
      <div className="contact-container">
        <div className="contact-container--box">
          <FaEnvelope />
          <span>E-mail</span>
          <a href="mailto:bhigoreduardo@gmail.com">bhigoreduardo@gmail.com</a>
        </div>

        <div className="contact-container--box">
          <FaMobileAlt />
          <span>Telefone</span>
          <a href="tel:+55 (27) 9 9831-1970">+55 (27) 9 9831-1970</a>
        </div>

        <div className="contact-container--box">
          <FaWhatsapp />
          <span>WhatsApp</span>
          <a href="tel:+55 (27) 9 9831-1970">+55 (27) 9 9831-1970</a>
        </div>

        <div className="contact-container--box">
          <FaMapMarked />
          <span>Endereço</span>
          <span style={{ display: "block", marginTop: "1rem" }}>
            Colatina, ES - Brasil
          </span>
        </div>
      </div>

      <div className="social-share">
        <a href="https://www.instagram.com/bhigoreduardo/" target="blank">
          <i>
            <FaInstagram />
          </i>
        </a>

        <a href="https://www.linkedin.com/bhigoreduardo/" target="blank">
          <FaLinkedin />
        </a>

        <a href="https://www.facebook.com/bhigoreduardo/" target="blank">
          <FaFacebook />
        </a>

        <a href="https://www.twitter.com/bhigoreduardo/" target="blank">
          <FaTwitter />
        </a>

        <a href="https://www.github.com/bhigoreduardo/" target="blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Social;
