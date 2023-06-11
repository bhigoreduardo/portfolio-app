import { useState } from "react";

import { about } from "src/utils/data";
import { portfolio } from "src/utils/data";
import Container from "src/widgets/Container";
import Hero from "src/components/Hero";
import Title from "src/components/Title";
import Grid from "src/widgets/Grid";
import Box from "src/components/Box";
import Card from "src/components/Card/Card";
import Contact from "src/components/Contact";
import Social from "src/components/Social";

function Home() {
  const [search, setSearch] = useState("ecommerce");
  const aboutText =
    "Processo de desenvolvimento, é algo contínuo que envolverá sua participação para testes de sua solução visando atender a sua necessidade.";
  const projectText =
    "Veja alguns exemplos de projetos aos quais já desenvolvir. Dê vida também a sua ideia com um design fácil de usar e atraente.";
  const contactText =
    "Envie-me sua mensagem e vamos conversar. Tenho certeza que você já tem algumas ideias em mente. Vamos falar sobre isso.";

  return (
    <section className="home">
      <div id="inicio" className="home--about">
        <Container>
          <Hero />
        </Container>
      </div>

      <div id="sobre" className="home--about">
        <Container>
          <Title h2="Processos" p={aboutText} />
          <Grid>
            {about?.map((item, i) => (
              <Box key={i} {...item} />
            ))}
          </Grid>
        </Container>
      </div>

      <div id="portfolio" className="home--portfolio">
        <Container>
          <Title h2="Meus projetos" p={projectText} />
          <div className="home--portfolio-group-btn">
            <button className={`btn ${search === "ecommerce" && "active"}`} onClick={() => setSearch("ecommerce")}>E-commerce</button>
            <button  className={`btn ${search === "corp" && "active"}`} onClick={() => setSearch("corp")}>Corporativo</button>
            <button  className={`btn ${search === "delivery" && "active"}`} onClick={() => setSearch("delivery")}>Delivery</button>
            <button  className={`btn ${search === "landing" && "active"}`} onClick={() => setSearch("landing")}>Landing Page</button>
            <button  className={`btn red ${search === "all" && "active"}`} onClick={() => setSearch("all")}>Todos</button>
          </div>
          <Grid>
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} {...portfolio[0]} />
            ))}
          </Grid>
        </Container>
      </div>

      <div id="contato" className="home--contact">
        <Container>
          <Title h2="Fale comigo" p={contactText} />
          <Contact />
          <Social />
        </Container>
      </div>
    </section>
  );
}

export default Home;
