import React from "react";
import "./Final.css";

const Final = ({
  image,
  title,
  readyInMinutes,
  dishTypes,
  diets,
  extendedIngredients,
}) => {
  return (
      <div className="container">
        <div className="recipedetails">
          <h3 className="text">{title}</h3>
          <ol className="list">
            <li>ReadyInMinutes:{readyInMinutes}</li>
            <li>DishType:{dishTypes}</li>
            <li>Diets:<span className="diets">{diets}</span></li>
          </ol>
        </div>
        <div className="product-image">
          <img src={image} alt="picture" />
          <div className="info">
            <h2>ingredients:</h2>
            {extendedIngredients}
          </div>
        </div>
      </div>
  );
};

export default Final;
