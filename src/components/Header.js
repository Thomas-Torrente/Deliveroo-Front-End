import React from "react";

const Header = ({ data }) => {
  return (
    <>
      <div className="header">
        <div className="top">
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/f/f7/Deliveroo_logo.svg/1200px-Deliveroo_logo.svg.png"
            alt=""
          />
        </div>

        <div className="infoBigBox">
          <div className="contenair">
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>

          <img className="infoImg" src={data.restaurant.picture} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
