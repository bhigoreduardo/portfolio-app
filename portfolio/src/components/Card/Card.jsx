/* eslint-disable react/prop-types */
import "./Card.style.scss";

function Card({ title, cover, image, stacks, href }) {
  return (
    <article className="card">
      <h3>{title}</h3>

      <div className="card--content">
        <div className="card--content-front">
          <img src={cover} alt={title} />
        </div>

        <div className="card--content-back">
          <img src={image} alt={title} />

          {stacks?.length > 0 && (
            <div className="card--content-back-btn-group">
              {stacks.map((item, i) => (
                <button key={i} type="button" className="btn dark">
                  {item}
                </button>
              ))}
              <a href={href} target="blank" className="btn red">
                VER
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;
