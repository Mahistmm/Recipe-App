import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Final from "./Final";

const Cards = ({ data }) => {
  return (
    <Carousel>
      {data.map((values, index) => {
        return (
          // 
          <Final
            key={index}
            image={values.image}
            title={values.title}
            readyInMinutes={values.readyInMinutes}
            dishTypes={values.dishTypes}
            diets={values.diets.map((diets, index) => {
              return <h4>{diets}</h4>;
            })}
            extendedIngredients={values.extendedIngredients.map(
              (ingredient, index) => {
                return <li>{ingredient.aisle}</li>;
              }
            )}
          />
          // </Carousel>
        );
      })}
    </Carousel>
  );
};

export default Cards;
