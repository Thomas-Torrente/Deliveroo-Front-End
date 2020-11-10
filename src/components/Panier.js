import React from "react";

const Panier = ({ data, setPanier, panier }) => {
  const delivery = 2.5;
  let subTotal = 0;
  //   subTotal = itemsPrice; itemsprice doit etre le prix total de tous les trucs ajouter sans la tva

  const total = subTotal + delivery;

  return (
    <>
      <div className="allPanier">
        <button className={panier ? "panierValid" : "panierNotValid"}>
          Valider mon panier
        </button>
        <div></div>
      </div>
    </>
  );
};

export default Panier;
