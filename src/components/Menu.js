import React from "react";

const Menu = ({ data, setPanier }) => {
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
                        <div className="itemCardMenu" onClick>
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
