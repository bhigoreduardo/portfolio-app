/* eslint-disable react/prop-types */
import "./Box.style.scss";

function Box({ title, shortDescription, image }) {
  return (
    <article className="box">
      <img src={image} alt={title} />
      <strong>{title}</strong>
      <p>{shortDescription}</p>
    </article>
  );
}

export default Box;
