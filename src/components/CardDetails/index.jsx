// import React from "react";
// import "./style.css"
// import { MdOutlineVerified } from "react-icons/md";

// export default function CardDetails({ card, handleBuy }) {
//   const { image, name, isAvailable, desOne, priceOne, desTwo, priceTwo } = card;

//   const handleBuySubmit = () => {
//     let msg = `Are you sure you want to buy ${name}`;
//     handleBuy(card); // Pass the card object to the parent component
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <div className="cardImage">
//           <img src={image} alt="" className="image" />
//         </div>
//         <div className="cardData">
//           <h2 className="Name">
//             {name}
//             {isAvailable ? <MdOutlineVerified /> : " "}
//           </h2>
//           <div className="lowerData">
//             <div>
//               <p className="floor">{desOne}</p>
//               <b className="price1">{priceOne}</b>
//             </div>
//             <div>
//               <p className="totalvalue">{desTwo}</p>
//               <b className="price2">{priceTwo}</b>
//             </div>
//           </div>
//           <button className="buttonOne" onClick={handleBuySubmit}>Buy</button>
//         </div>
//       </div>
//     </div>
//   );
// }
