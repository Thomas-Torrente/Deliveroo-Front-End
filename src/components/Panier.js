import React from "react";

const Panier = ({ data, setPanier }) => {
  const delivery = 2.5;
  let subTotal = 0;
  //   subTotal = itemsPrice; itemsprice doit etre le prix total de tous les trucs ajouter sans la tva

  const total = subTotal + delivery;
  return (
    <>
      <button className={setPanier ? "panierNotValid" : "panieValid"}>
        Valider mon panier
      </button>
      <p>{total}</p>
    </>
  );
};

export default Panier;
