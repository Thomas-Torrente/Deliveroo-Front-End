import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Panier from "./components/Panier";

function App() {
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = false;
  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-back-thomas.herokuapp.com/"
    );

    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <div>En cours de chargemment</div>
  ) : (
    <>
      <div className="contenair">
        <Header data={data} />
        <Menu data={data} />
        <Panier data={data} setPanier={setPanier} />
      </div>
    </>
  );
}
export default App;
