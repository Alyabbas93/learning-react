import React from "react";
export default function Destr({ arey }) {
  const [{ id, name }] = arey; // Destructuring the object inside the array
  return (
    <div>
      <h1>
        {id} {name}
      </h1>
    </div>
  );
}
