import "./Hero.style.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero--content">
        <div className="hero--content-head">
          <div className="hero--content-head-box"></div>
          <span>Bem-Vindo! Como posso te ajudar?</span>
        </div>

        <h1>Me chamo Higor</h1>
        <p>
          Sou desenvolvedor de software FullStack. Meu objetivo é te ajudar a
          desenvolver sua ideia ou negócio com qualidade e sob demanda, sendo
          algo totalmente personalizado!
        </p>
      </div>

      <div className="hero-icons">
        <img className="icon" src="/icons/home-icon.svg" alt="Ícone" />
        <img className="icon-1" src="/icons/home-icon-1.svg" alt="Ícone" />
        <img className="icon-2" src="/icons/home-icon-2.svg" alt="Ícone" />
        <img className="icon-3" src="/icons/home-icon-3.svg" alt="Ícone" />
        <img
          className="icon-4 alltuchtopdown"
          src="/icons/home-icon-4.svg"
          alt="Ícone"
        />
        <img
          className="icon-5 alltuchtopdown"
          src="/icons/home-icon-5.svg"
          alt="Ícone"
        />
        <img className="icon-6" src="/icons/home-icon-6.svg" alt="Ícone" />
        <img
          className="icon-7 rotateme"
          src="/icons/home-icon-7.svg"
          alt="Ícone"
        />
        <img
          className="icon-8 rotateme"
          src="/icons/home-icon-8.svg"
          alt="Ícone"
        />
        <img className="icon-9" src="/icons/home-icon-9.svg" alt="Ícone" />
      </div>
    </div>
  );
}

export default Hero;
