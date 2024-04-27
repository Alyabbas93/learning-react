import React from "react";
import Data from "../Data/index";

function CardList({ data, nextData, previousData }) {
  return (
    <div>
      {data.map((item, index) => {
        return <Data key={item.id} {...item}  previousData={previousData} nextData={nextData} />;
      })}
    </div>
  );
}

export default CardList;