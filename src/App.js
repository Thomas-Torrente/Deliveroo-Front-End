import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Panier from "./components/Panier";

function App() {
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState(false);
  const [inPanier, setInPanier] = useState("");
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
        <Menu data={data} setPanier={setPanier} setInPanier={setInPanier} />
        <Panier
          data={data}
          setPanier={setPanier}
          panier={panier}
          inPanier={inPanier}
          setInPanier={setInPanier}
        />
      </div>
    </>
  );
}
export default App;
