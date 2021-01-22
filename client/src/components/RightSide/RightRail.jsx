/* eslint-disable */

import React from 'react';
import ColorWays from './ColorWays.jsx';
import Sizes from './Sizes.jsx';

const RightRail = (props) => {
  const { shoes, changeColorWay, currShoe, sizes, stock, selectSize, selectedSize, selectedStock, onAddButton, addButtonClicked, favorited, onFavoriteButton } = props;
  return (
    <div className="rightWrapper">
      <div id="shoeTitle">
        <div className="productName">
          <h2>Basketball Shoe</h2>
          <h1>LeBron 18</h1>
        </div>
        <div className="productPrice">
          <div className="textPrice">
            $200
          </div>
        </div>
      </div>
      <ColorWays shoes={shoes} currShoe={currShoe} changeColorWay={changeColorWay} />
      <Sizes currShoe={currShoe} sizes={sizes} stock={stock} selectSize={selectSize} selectedSize={selectedSize} selectedStock={selectedStock} onAddButton={onAddButton} addButtonClicked={addButtonClicked} favorited={favorited} onFavoriteButton={onFavoriteButton} />
    </div>
  );
};

export default RightRail;
