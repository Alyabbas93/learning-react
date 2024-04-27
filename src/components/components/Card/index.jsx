import React from "react";
import CardList from "../CardList/index";

function Card({ data, nextData, previousData }) {
  return (
    <div style={{ border: "2px solid red" ,width:"10rem",minHeight:"40vh"}}>
      <CardList data={data}  previousData={previousData} nextData={nextData} />
    </div>
  );
}

export default Card;