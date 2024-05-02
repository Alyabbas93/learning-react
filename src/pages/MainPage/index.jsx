import React, { useState } from "react";
import "./style.css";
const Box = () => {
  const [boxes, setBoxes] = useState([
    [],
    [],
    []
  ]);
  const handleCreateClick = (boxIndex) => {
    const newBoxes = [...boxes];
    newBoxes[boxIndex] = [...newBoxes[boxIndex], { text: "", isEditing: true }];
    setBoxes(newBoxes);
  };
  const handleInputChange = (boxIndex, cardIndex, newText) => {
    const newBoxes = [...boxes];
    newBoxes[boxIndex][cardIndex].text = newText;
    setBoxes(newBoxes);
  };
  const handleEditClick = (boxIndex, cardIndex) => {
    const newBoxes = [...boxes];
    newBoxes[boxIndex][cardIndex].isEditing = true;
    setBoxes(newBoxes);
  };
  const handleBlur = (boxIndex, cardIndex) => {
    const newBoxes = [...boxes];
    newBoxes[boxIndex][cardIndex].isEditing = false;
    setBoxes(newBoxes);
  };
  const handleDeleteClick = (boxIndex, cardIndex) => {
    const confirmation = window.confirm("Are you sure you want to delete this item?");
    if (confirmation) {
      const newBoxes = [...boxes];
      newBoxes[boxIndex] = newBoxes[boxIndex].filter((_, index) => index !== cardIndex);
      setBoxes(newBoxes);
    }
  };
  const handleNextClick = (boxIndex, cardIndex) => {
    if (boxIndex < boxes.length - 1) {
      const newBoxes = [...boxes];
      const movedCard = newBoxes[boxIndex].splice(cardIndex, 1)[0];
      newBoxes[boxIndex + 1].push(movedCard);
      setBoxes(newBoxes);
    }
  };
  const handlePreviousClick = (boxIndex, cardIndex) => {
    if (boxIndex > 0) {
      const newBoxes = [...boxes];
      const movedCard = newBoxes[boxIndex].splice(cardIndex, 1)[0];
      newBoxes[boxIndex - 1].push(movedCard);
      setBoxes(newBoxes);
    }
  };
  return (
    <div className="main">
      {boxes.map((box, boxIndex) => (
        <div className="child" key={boxIndex}>
          <h2>{boxIndex === 0 ? "UX UI" : boxIndex === 1 ? "Frontend" : "Backend"}</h2>
          {box.map((card, cardIndex) => (
            <div key={cardIndex}>
              {card.isEditing ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleInputChange(boxIndex, cardIndex, e.target.elements.cardText.value);
                    handleBlur(boxIndex, cardIndex);
                  }}
                >
                  <input
                    type="text"
                    name="cardText"
                    defaultValue={card.text}
                    onBlur={() => handleBlur(boxIndex, cardIndex)}
                    autoFocus
                    className="input-text"
                    style={{ marginBottom: "10px" }}
                  />
                </form>
              ) : (
                <p>{card.text}</p>
              )}
              <div>
                {box.length > 0 && (
                  <button className="butn" onClick={() => handleEditClick(boxIndex, cardIndex)}>
                    {card.isEditing ? "Save" : "Edit"}
                  </button>
                )}
                {box.length > 0 && (
                  <button className="butn" onClick={() => handleDeleteClick(boxIndex, cardIndex)}>Delete</button>
                )}
                {boxIndex < boxes.length - 1 && (
                  <button className="butn" onClick={() => handleNextClick(boxIndex, cardIndex)}>Next</button>
                )}
                {boxIndex > 0 && (
                  <button className="butn" onClick={() => handlePreviousClick(boxIndex, cardIndex)}>Back</button>
                )}
              </div>
            </div>
          ))}
          <button className="butn" onClick={() => handleCreateClick(boxIndex)}>Add</button>
        </div>
      ))}
    </div>
  );
};
export default Box;