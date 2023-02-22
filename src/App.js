import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards";
import Final from "./components/Final";

const App = () => {
  const [datas, setDatas] = useState([]);

  const geturl = async () => {
    const url =
      "https://api.spoonacular.com/recipes/random?number=100&tags&apiKey=97919d2f95e044e98524c0680e8ad450";
    const res = await axios.get(url);
    setDatas(res.data.recipes);
  };

  useEffect(() => {
    geturl();
  }, []);

  return (
    <div className="app">
      <h1>Recipes</h1>
      <Cards data={datas} />
      <Final />
    </div>
  );
};

export default App;
