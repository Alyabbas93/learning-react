import React from "react";
import arey from "./arra"; // Importing the array directly
import Destr from "../pages/index"; // Assuming the correct path to the Destr component

export default function Super() {
  return (
    <div>
      <Destr arey={arey} />
    </div>
  );
}
