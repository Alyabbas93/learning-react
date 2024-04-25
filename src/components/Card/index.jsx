import React, { useState } from "react";
import "./style.css";
import CardDetails from "../CardDetails";
import imageOne from "../../assets/images/img1.png";
import imageTwo from "../../assets/images/img2.jpg";
import imageThree from "../../assets/images/img3.jpg";
import imageFour from "../../assets/images/img4.png";
import imageFive from "../../assets/images/img5.jpg";
import { MdOutlineVerified } from "react-icons/md";
const cardList = [
  {
    image: imageOne,
    name: "Maison Margiela..",
    isAvailable: true,
    desOne: "Floor price",
    priceOne: "0.35 ETH",
    desTwo: "Total volume",
    priceTwo: "0.34 ETH",
  },
  {
    image: imageTwo,
    name: "TODAY - Ancient..",
    isAvailable: false,
    desOne: "Floor price",
    priceOne: "0.35 ETH",
    desTwo: "Total volume",
    priceTwo: "0.35 ETH",
  },
  {
    image: imageThree,
    name: "BASED PIXELS By..",
    isAvailable: true,
    desOne: "Floor price",
    priceOne: "0.35 ETH",
    desTwo: "Total volume",
    priceTwo: "0.35 ETH",
  },
  {
    image: imageFour,
    name: "Filigree – Digital..",
    isAvailable: true,
    desOne: "Floor price",
    priceOne: "0.35 ETH",
    desTwo: "Total volume",
    priceTwo: "0.35 ETH",
  },
  {
    image: imageFive,
    name: "BlockGames Dice",
    isAvailable: false,
    desOne: "Floor price",
    priceOne: "0.35 ETH",
    desTwo: "Total volume",
    priceTwo: "0.35 ETH",
  },
];

export default function Card() {
  const [cart, setCart] = useState([]);

  const handleBuy = (card) => {
    setCart([...cart, card]); // Add the selected card to the cart
  };

  return (
    <div className="itemCont">
      <div className="cartSection">
        <h2>Cart</h2>
        <div className="cards">
          {cart.map((item, index) => (
            <div className="cardItem" key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
         
              <div className="cardData">
          <div className="lowerData">
            <div>
              <p className="floor">{item.desOne}</p>
              <b className="price1">{item.priceOne}</b>
            </div>
            <div>
              <p className="totalvalue">{item.desTwo}</p>
              <b className="price2">{item.priceTwo}</b>
            </div>
          </div>

        </div>
              <button>Remove</button>

            </div>
          ))}
        </div>
      </div>
      <div className="container">
        {cardList.map((data, index) => (
          <CardDetails key={index} card={data} handleBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
}
