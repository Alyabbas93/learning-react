import React from "react";

function Data({ id, name, nextData, previousData }) {
  const handleNextClick = () => {
    nextData({ id, name });
  };

  const handlePreviousClick = () => {
    previousData({ id, name });
  };

  return (
    <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
      <p>{name}</p>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    
    </div>
  );
}

export default Data;