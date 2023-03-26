import React from 'react'
import EnglishFlag from "../assets/english.png";

type Props = {}

function Card({}: Props) {
  return (
    <div className="card has-background-dark has-text-light">
    <div className="card-image ">
      <figure className="image is-2by1">
        <img src={EnglishFlag} alt="" />
      </figure>
    </div>
    <div className="card-content">
        <h3 className="title has-text-light is-size-4">White Castle Rush</h3>
      <div className="content">
        Rush to castle age so you can build your white tower on the enemy base.
      </div>
      <div className="tags">
        <span className="tag is-success">Easy</span>
        <span className="tag is-info">Open</span>
        <span className="tag is-warning">Cheese</span>
      </div>
    </div>
  </div>
  )
}

export default Card