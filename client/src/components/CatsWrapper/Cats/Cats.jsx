import React from "react";
import "./Cats.scss";
import { AiFillStar } from "react-icons/ai";

const Cats = ({ cats }) => {
  return (
    <div className="cat__cards">
      {cats.map((cat) => (
        <div className="cat__card">
          <div className="cat__card-inner">
            <div className="cat__card-front">
              <img src={cat?.image?.url} alt={cat.name} />
              <div className="app__card-footer">
                <h2>Breed: {cat.name}</h2>
              </div>
            </div>
            <div className="cat__card-back">
              <h4>Origin: {cat.origin}</h4>
              <h4>Character: {cat.temperament}</h4>
              <h4>
                Child Friendly:{" "}
                {new Array(cat.child_friendly).fill(null).map(() => (
                  <AiFillStar className="app__card-star" />
                ))}
              </h4>
              <h4>
                Dog friendly:{" "}
                {new Array(cat.dog_friendly).fill(null).map(() => (
                  <AiFillStar className="app__card-star" />
                ))}
              </h4>
              <p>Description: {cat.description}</p>
              <p>
                <a href={cat.wikipedia_url} target="_blank" rel="noreferrer">
                  More
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cats;
