import React, { useState } from "react";

export default function Tour({ id, name, info, image, price }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{info}</p>
        <div className="delete-btn">Not interested</div>
      </footer>
    </article>
  );
}
