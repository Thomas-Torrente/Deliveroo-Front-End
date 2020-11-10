import React from "react";

const Menu = ({ data, setPanier, setInPanier, inPanier }) => {
  return (
    <>
      <div className="allMenu">
        {data.categories.map((categorie, i) => {
          // on fait une boucle pour afficher les noms de toutes les catégorie

          return (
            <>
              <div className="contenair">
                <h2>{categorie.name}</h2>

                {categorie.meals.map((meal, i) => {
                  return (
                    <>
                      <div className="cardMenu">
                        <div
                          className="itemCardMenu"
                          onClick={() => {
                            setPanier(true);
                            // au click cela passe en true et change le css

                            const newAddInPannier = [...inPanier];
                            // on créer une const qui est une copie de setInPanier
                            newAddInPannier.push({
                              // on ajoute au tableau le titre et le prix
                              title: meal.title,
                              price: meal.price,
                            });
                            setInPanier(newAddInPannier);
                            // on affiche la nouvelle valeur
                          }}
                        >
                          <img src={meal.picture} alt="" />

                          <h3>{meal.title}</h3>
                          <div>{meal.description}</div>
                          <div>{meal.price}</div>
                          <div>{meal.popular}</div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
