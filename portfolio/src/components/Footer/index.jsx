import "./Footer.style.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#inicio" className="btn dark">
          Início
        </a>
        <a href="#sobre" className="btn dark">
          Sobre
        </a>
        <a href="#portfolio" className="btn dark">
          Portfólio
        </a>
        <a href="#contato" className="btn dark">
          Contato
        </a>
      </div>

      <div className="footer--credit">
        <span>
          Copyright {new Date().getFullYear()} ©&nbsp;
          <a href="#inicio" className="btn red">
            Higor Eduardo
          </a>
          | Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
}

export default Footer;
